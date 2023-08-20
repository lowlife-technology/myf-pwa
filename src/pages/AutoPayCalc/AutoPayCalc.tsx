import { useEffect, useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { Input } from '../../components/Input/Input';
import { InfoCell } from '../../components/InfoCell/InfoCell';
import { CashDividend, getAssetsThunk } from './slices/AutoPaySlices';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { PaymentDateInfo } from '../../components/PaymentDateInfo/PaymentDateInfo';

export default function AutoPayCalc() {
  const [inputValue, setInputValue] = useState('');
  const [ticker, setTicker] = useState('');
  const dispatch = useAppDispatch();
  const tickerData = useSelector((store) => store.AutoPayReducer.data);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    dispatch(getAssetsThunk(ticker));
  }, [dispatch, ticker]);

  const AddAsset = () => {
    return (
      <button
        onClick={() => setTicker(inputValue)}
        className='bg-slate-400 hover:bg-slate-600 text-white rounded-full shadow-md focus:outline-none'
      >
        <PlusIcon className='w-4 h-4' />
      </button>
    );
  };

  const paymentDate = tickerData.dividendsData?.cashDividends;

  console.log('pd', paymentDate);

  return (
    <div className='items-center flex  justify-center gap-10 flex-1 h-screen'>
      <div className='flex flex-col justify-center items-center'>
        {tickerData.logourl ? (
          <div>
            <div className='flex flex-col items-center gap-1 border-b border-slate-400'>
              <img src={tickerData.logourl} alt='logo' />
              <p className='text-xs'>{tickerData.shortName}</p>
            </div>
            <InfoCell title='Cotação' content={tickerData.regularMarketPrice} />
          </div>
        ) : null}
        <div className='flex'>
          <Input onChange={handleInputChange} children={<AddAsset />} value={inputValue} />
        </div>
      </div>
      <div className='flex gap-10 items-center'>
        <div className='gap-10 h-96 overflow-auto '>
          {paymentDate?.map(({ paymentDate, rate }: CashDividend) => {
            return <PaymentDateInfo paymentDate={paymentDate} amout={rate} />;
          })}
        </div>
      </div>
    </div>
  );
}
