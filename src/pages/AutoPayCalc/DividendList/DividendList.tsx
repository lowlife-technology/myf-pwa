import { CashDividends } from '../slices/AutoPaySlices';
import { EarnCalculator } from '../../../components/EarnCalculator/EarnCalculator';

interface DividendListProps {
  data: {
    dividendsData: {
      cashDividends: CashDividends[];
    };
  };
}

export const DividendList = ({ data }: DividendListProps) => {
  return (
    <div className='md:h-5/6 mb-96 flex flex-col w-fit justify-start md:flex-1 items-center gap-12 '>
      <div className='flex flex-col items-center '>
        <a className='font-bold text-xl text-blue-800'>Payout and Bought</a>
        <p className='text-xs text-center'>
          Set the stock's amount <br /> you bought berween dates
        </p>
      </div>
      <div className='md:overflow-auto '></div>
      <div className='gap-5 flex flex-col'>
        {data.dividendsData?.cashDividends?.map(
          ({ paymentDate, rate, lastDatePrior }: CashDividends, index: number) => {
            return (
              <div key={index} className={`border-b border-slate-300`}>
                <EarnCalculator
                  cost={rate}
                  lastDatePrior={lastDatePrior}
                  paymentDate={paymentDate}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
