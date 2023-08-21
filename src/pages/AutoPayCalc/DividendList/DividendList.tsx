import { PaymentDateInfo } from '../../../components/PaymentDateInfo/PaymentDateInfo';
import { CashDividends } from '../slices/AutoPaySlices';

interface DividendListProps {
  data: {
    dividendsData: {
      cashDividends: CashDividends[];
    };
  };
}

export const DividendList = ({ data }: DividendListProps) => {
  return (
    <div className='md:flex-1 items-start md:justify-end justify-center pt-10 md:pr-10 pb-96 md:pb-0 flex'>
      <div className='overflow-auto w-fit '>
        <div className='gap-4 flex flex-col'>
          {data.dividendsData?.cashDividends?.map(
            ({ paymentDate, rate }: CashDividends, index: number) => {
              return (
                <div
                  key={index}
                  className={`  border-b border-slate-300 ${index % 2 ? 'bg-gray-200' : ''}`}
                >
                  <PaymentDateInfo paymentDate={paymentDate} amout={rate} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
