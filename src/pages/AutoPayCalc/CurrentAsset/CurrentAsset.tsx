import { useEffect, useState } from 'react';
import { decimalToBRLCurrency } from '../../../functions/DecimalToBrlCurrency';
import { useAppSelector } from '../../../hooks/useAppSelector';

export const CurrentAsset = () => {
  const [shiftSate, setShiftState] = useState(false);
  const { staticReducer, data } = useAppSelector((store) => store.AutoPayReducer);

  const earns = staticReducer.boughtPerMonth.reduce((total, earnPerPurchase) => {
    return total + earnPerPurchase.receivedAmount;
  }, 0);

  // const quantity = staticReducer.boughtPerMonth.reduce((total, quoteQuantity) => {
  //   return total + quoteQuantity.quantity;
  // }, 0);

  const regular = staticReducer.boughtPerMonth.reduce((total, marketPrice) => {
    return total + marketPrice.purchaseVolume;
  }, 0);

  const vallumn = regular + earns;

  useEffect(() => {
    const interval = setInterval(() => {
      setShiftState((prevShiftState) => !prevShiftState);
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='flex md:justify-start justify-center md:items-start'>
      <div className=' w-fit'>
        {data.logourl ? (
          <div className='flex flex-col items-center gap-2 justify-center'>
            <div className='flex flex-col items-center gap-1 border-b border-slate-400'>
              <img src={data.logourl} alt='logo' />
              <p className='text-xs'>{data.shortName}</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex gap-1 items-center'>
                <p className='text-xs'>R$</p>
                <p className='text-lg'>
                  {shiftSate
                    ? decimalToBRLCurrency(vallumn)
                    : decimalToBRLCurrency(data.regularMarketPrice)}
                </p>
              </div>
              <p className='text-xs'>{shiftSate ? 'much you have' : 'market price'}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
