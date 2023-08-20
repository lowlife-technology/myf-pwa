import { useState } from 'react';
import { decimalToBRLCurrency } from '../../functions/DecimalToBrlCurrency';
import { Input } from '../Input/Input';

interface InfoCellProps {
  paymentDate: Date;
  amout: number;
}

export const PaymentDateInfo = ({ paymentDate, amout }: InfoCellProps) => {
  const [amoutMouth, setAmoutMouth] = useState(0);

  const handleChangeAmout = (e) => {
    setAmoutMouth(e.target.value);
  };
  return (
    <div className='flex items-center space-x-4 border  rounded transition duration-300'>
      <p className='text-sm font-medium text-slate-500'>
        {new Date(paymentDate).toLocaleDateString('pt-BR')}
      </p>
      <div className='flex items-center space-x-1'>
        <p className='text-xs font-medium'>R$</p>
        <p className='text-lg  text-slate-800 font-semibold'>{decimalToBRLCurrency(amout)}</p>
      </div>
      <Input
        small
        placeholder='Buy amount'
        onChange={handleChangeAmout}
        value={amoutMouth === 0 ? '' : amoutMouth}
      />
      {amoutMouth === 0 ? null : <p>R$ {decimalToBRLCurrency(amout * amoutMouth)}</p>}
    </div>
  );
};
