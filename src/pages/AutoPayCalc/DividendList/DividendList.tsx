import { CashDividends } from '../slices/AutoPaySlices';
import { PaymentDateInfo } from '../../../components/PaymentDateInfo/PaymentDateInfo';

interface DividendListProps {
  data: {
    dividendsData: {
      cashDividends: CashDividends[];
    };
  };
}

export const DividendList = ({ data }: DividendListProps) => {
  const sortedCashDividends = data.dividendsData?.cashDividends
    ?.slice() // Make a copy of the array to avoid modifying the original
    .sort((a, b) => new Date(b.paymentDate).getTime() - new Date(a.paymentDate).getTime());
  return (
    <div className='mb-96 flex flex-col w-fit justify-start md:flex-1 items-center gap-12 '>
      <div className='md:overflow-auto '></div>
      <div className='gap-5 flex flex-col'>
        {sortedCashDividends.map(({ paymentDate, rate }: CashDividends, index: number) => {
          return <PaymentDateInfo key={index} paymentDate={paymentDate} cost={rate} />;
        })}
      </div>
    </div>
  );
};
