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
    <div className='mb-96 flex flex-col w-fit justify-start md:flex-1 items-center gap-12 '>
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
