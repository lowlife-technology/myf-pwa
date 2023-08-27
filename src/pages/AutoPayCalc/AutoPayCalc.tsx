import { ChangeEvent, useState } from 'react';
import { AutoPaySlice, getAssetsThunk } from './slices/AutoPaySlices';
import { InputConsumer } from './InputConsumer/NormalDataConsumer/InputConsumer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { CurrentAsset } from './CurrentAsset/CurrentAsset';
import { DividendList } from './DividendList/DividendList';
import { ComplementalInfo } from './ComplementalInfo/ComplementalInfo';
import { Drawer } from '../../components/Drawer/Drawer';
import { Chart } from './Chart/Chart';

export default function AutoPayCalc() {
  const [boughtDate, setBoughtDate] = useState('');
  const [asset, setAsset] = useState('');
  const [quant, setQuant] = useState(0);
  const [price, setPrice] = useState(0);

  const dispatch = useAppDispatch();

  const { cashDividends } = useAppSelector((store) => store.AutoPayReducer.data.dividendsData);
  const { data } = useAppSelector((store) => store.AutoPayReducer);

  const onAssetChose = () => {
    dispatch(getAssetsThunk(asset));
  };

  console.log('ANTES', boughtDate);

  const day = boughtDate.slice(8, 10);
  const month = boughtDate.slice(5, 7);
  const year = boughtDate.slice(0, 4);

  const formateDate = `${year}-${month}-${day}`;

  console.log('durante', formateDate);

  const formatedDayBought = new Date(formateDate);

  console.log('depois', formatedDayBought);

  const pagamentosFiltrados = cashDividends.filter(
    (pagamento) => new Date(pagamento.paymentDate) > formatedDayBought
  );
  const valoresRecebidos = pagamentosFiltrados.map((pagamento) => ({
    data: new Date(pagamento.paymentDate),
    valorRecebido: pagamento.rate * quant
  }));

  const receivedAmount = valoresRecebidos.reduce((total, pagamento) => {
    return total + pagamento.valorRecebido;
  }, 0);

  const handleAddNewPurchase = () => {
    const newBoughtPerMonthData = {
      startDate: boughtDate,
      quantity: quant,
      regularMarketPrice: price,
      purchaseVolume: quant * price,
      receivedAmount,
      valoresRecebidos
    };

    dispatch(AutoPaySlice.actions.addOwnerPurchase(newBoughtPerMonthData));
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

        <InputConsumer
          placeholder='Date da compra'
          type='date'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setBoughtDate(e.target.value)}
          value={boughtDate}
        />
        <div className='flex gap-2 items-center'>
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
        <Chart />
        <Drawer>
          <DividendList data={data} />
        </Drawer>
      </div>
    </div>
  );
}
