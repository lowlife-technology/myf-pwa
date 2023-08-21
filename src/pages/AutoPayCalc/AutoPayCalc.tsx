import { useState } from 'react';
import { AutoPaySlice, getAssetsThunk } from './slices/AutoPaySlices';
import { InputConsumer } from './InputConsumer/InputConsumer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { CurrentAsset } from './CurrentAsset/CurrentAsset';
import { DividendList } from './DividendList/DividendList';
import { InfoCell } from '../../components/InfoCell/InfoCell';

export default function AutoPayCalc() {
  const [flipInput, setFlipInput] = useState(false);
  const [asset, setAsset] = useState('');
  const [openDate, setOpenDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useAppDispatch();
  const { data, staticReducer } = useAppSelector((store) => store.AutoPayReducer);

  const onAssetChose = () => {
    dispatch(getAssetsThunk(asset));
  };
  const onQuantityChose = () => {
    const inputDate = new Date(openDate);

    const year = inputDate.getUTCFullYear();
    const month = String(inputDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getUTCDate()).padStart(2, '0');

    const formattedTime = '00:00:00.000';

    const formattedDateString = `${year}-${month}-${day}T${formattedTime}Z`;

    dispatch(AutoPaySlice.actions.addOponDate({ openData: formattedDateString, quantity }));
    setOpenDate('');
    setQuantity('');
    setFlipInput(false);
  };

  const totalAmount = staticReducer.reduce(
    (total, item) => Number(total) + Number(item.quantity),
    0
  );

  return (
    <div className='md:flex justify-center  gap-10 flex-1 h-screen overflow-auto'>
      <div className=' h-[20%] md:h-full md:flex-1'>
        {totalAmount !== 0 && <InfoCell title='Quant' content={totalAmount} />}
      </div>
      <div className=' h-[80%] md:h-full justify-between md:flex-1 flex flex-col items-center '>
        <CurrentAsset data={data} />
        <div className='flex items-end justify-center pb-20'>
          <div className='w-fit'>
            <InputConsumer
              placeholder='Ticker'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAsset(e.target.value)}
              onClick={onAssetChose}
              value={asset}
            />
            {flipInput ? (
              <InputConsumer
                placeholder='Quantity'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(e.target.value)}
                onClick={onQuantityChose}
                value={quantity}
              />
            ) : (
              <InputConsumer
                placeholder='2023-10-05'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOpenDate(e.target.value)}
                onClick={() => setFlipInput(true)}
                value={openDate}
              />
            )}
          </div>
        </div>
      </div>
      <DividendList data={data} />
    </div>
  );
}
