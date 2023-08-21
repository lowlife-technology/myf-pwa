import { decimalToBRLCurrency } from '../../functions/DecimalToBrlCurrency';

interface InfoCellProps {
  paymentDate: Date;
  amout: number;
}

export const PaymentDateInfo = ({ paymentDate, amout }: InfoCellProps) => {
  return (
    <div className='flex items-center justify-between space-x-10 border rounded transition duration-300'>
      <p className='text-sm font-medium text-slate-500'>
        {new Date(paymentDate).toLocaleDateString('pt-BR')}
      </p>
      <div className='flex items-center space-x-1'>
        <p className='text-xs font-medium'>R$</p>
        <p className='text-lg  text-slate-800 font-semibold'>{decimalToBRLCurrency(amout)}</p>
      </div>
    </div>
  );
};
