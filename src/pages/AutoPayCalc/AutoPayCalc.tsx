import { ChangeEvent, useEffect, useState } from 'react';
import { AutoPaySlice, getAssetsThunk } from './slices/AutoPaySlices';
import { InputConsumer } from './InputConsumer/NormalDataConsumer/InputConsumer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { CurrentAsset } from './CurrentAsset/CurrentAsset';
import { DividendList } from './DividendList/DividendList';
import { ComplementalInfo } from './ComplementalInfo/ComplementalInfo';
import { Drawer } from '../../components/Drawer/Drawer';
import { Chart } from './Chart/Chart';
import { useForm } from 'react-hook-form';
import { DataConsumer } from './InputConsumer/DateConsumer/DateConsumer';

export default function AutoPayCalc() {
  const [asset, setAsset] = useState('');
  const [quant, setQuant] = useState(0);
  const [price, setPrice] = useState(0);
  const [flip, setFlip] = useState(false);
  const [formateDate, setFormateDate] = useState('');
  const [formatedDayBought, setFormatedDayBought] = useState<Date | string>('');

  const dispatch = useAppDispatch();

  const form = useForm();

  const { cashDividends } = useAppSelector((store) => store?.AutoPayReducer?.data?.dividendsData);
  const { data } = useAppSelector((store) => store.AutoPayReducer);

  const onAssetChose = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch<any>(getAssetsThunk(asset));
  };

  useEffect(() => {
    const day = form.getValues('date')?.slice(4, 8);
    const month = form.getValues('date')?.slice(2, 4);
    const year = form.getValues('date')?.slice(0, 2);

    const formatedDate = `${day}-${month}-${year}`;

    console.log('formate', formatedDate);
    // setFormateDate(formatedDate);

    const dayBought = new Date(formatedDate);
    setFormatedDayBought(dayBought);
  }, [form, quant]);

  const pagamentosFiltrados = cashDividends.filter(
    (pagamento) => new Date(pagamento.paymentDate) > formatedDayBought
  );

  // console.log('income', new Date(cashDividends[0]?.paymentDate));
  // console.log('useDAte', formatedDayBought);

  // console.log('valor', pagamentosFiltrados);

  const valoresRecebidos = pagamentosFiltrados.map((pagamento) => ({
    data: new Date(pagamento.paymentDate),
    valorRecebido: pagamento.rate * quant
  }));

  const receivedAmount = valoresRecebidos.reduce((total, pagamento) => {
    return total + pagamento.valorRecebido;
  }, 0);

  const handleAddNewPurchase = () => {
    const newBoughtPerMonthData = {
      startDate: formateDate,
      quantity: quant,
      regularMarketPrice: price,
      purchaseVolume: quant * price,
      receivedAmount,
      valoresRecebidos
    };

    dispatch(AutoPaySlice.actions.addOwnerPurchase(newBoughtPerMonthData));

    setPrice(0);
    setQuant(0);
    setFlip(false);
  };

  return (
    <div className='justify-center flex-col items-center flex h-screen md:overflow-auto'>
      <div className=' justify-between h-full flex flex-col items-center '>
        <CurrentAsset />
        <ComplementalInfo display='flex' />
      </div>

      <div className='w-fit flex flex-col justify-center items-center pb-10 gap-2'>
        <InputConsumer
          placeholder='Ticker'
          buttonIcon='add'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAsset(e.target.value)}
          onClick={onAssetChose}
          value={asset}
        />
        {!flip ? (
          <div
            className={`flex gap-2 items-center ${data.shortName ? 'opacity-95' : 'opacity-0'}`}
          >
            <DataConsumer form={form} placeholder={'00/00/0000'} onClick={() => setFlip(true)} />
          </div>
        ) : (
          <div className='flex gap-2 items-center opacity-95'>
            <InputConsumer
              type='text'
              size='small'
              placeholder='Qtd'
              onChange={(e: ChangeEvent<HTMLInputElement>) => setQuant(Number(e.target.value))}
              value={quant < 1 ? '' : quant}
            />
            <InputConsumer
              size='medium'
              type='number'
              buttonIcon='text'
              text='R$'
              elementPosition='left'
              placeholder='0.00'
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
              value={price < 1 ? '' : price}
            />
            <button
              onClick={handleAddNewPurchase}
              className='p-1 bg-blue-900 text-white rounded-md h-8'
            >
              add
            </button>
          </div>
        )}
        <Chart />
        <Drawer>
          <DividendList data={data} />
        </Drawer>
      </div>
    </div>
  );
}
