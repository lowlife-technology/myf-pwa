import { decimalToBRLCurrency } from '../../functions/DecimalToBrlCurrency';

interface InfoCellProps {
  paymentDate: Date | string;
  cost: number;
}

export const PaymentDateInfo = ({ paymentDate, cost }: InfoCellProps) => {
  const formatedDate = `${paymentDate.slice(8, 10)}/${paymentDate.slice(5, 7)}/${paymentDate.slice(
    0,
    4
  )}`;
  return (
    <div className='flex items-center justify-between space-x-10 rounded transition duration-300'>
      <p className='text-sm font-medium text-slate-500'>{formatedDate}</p>
      <div className='flex items-center space-x-1'>
        <p className='text-xs font-medium'>R$</p>
        <p className='text-lg  text-slate-400 font-semibold'>{decimalToBRLCurrency(cost)}</p>
      </div>
    </div>
  );
};
