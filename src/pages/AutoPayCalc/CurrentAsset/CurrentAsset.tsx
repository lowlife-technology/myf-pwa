import { decimalToBRLCurrency } from '../../../functions/DecimalToBrlCurrency';
import { useAppSelector } from '../../../hooks/useAppSelector';

export const CurrentAsset = () => {
  const { staticReducer, data } = useAppSelector((store) => store.AutoPayReducer);

  const quotesTotal = staticReducer.quotesTotal;
  const proventsTotal = staticReducer.proventsTotal;
  const regular = data.regularMarketPrice;

  const vallumn = regular * quotesTotal + proventsTotal;

  return (
    <div className='md:flex-1  flex md:justify-start justify-center md:items-start  pt-10 '>
      <div className=' w-fit'>
        {data.logourl ? (
          <div className='flex flex-col items-center gap-2 justify-center'>
            <div className='flex flex-col items-center gap-1 border-b border-slate-400'>
              <img src={data.logourl} alt='logo' />
              <p className='text-xs'>{data.shortName}</p>
            </div>
            <div className='flex gap-1 items-center'>
              <p className='text-xs'>R$</p>
              <p className='text-lg'>{decimalToBRLCurrency(vallumn)}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
