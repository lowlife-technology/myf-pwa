import { useState } from 'react';
import { PaymentDateInfo } from '../PaymentDateInfo/PaymentDateInfo';
import { decimalToBRLCurrency } from '../../functions/DecimalToBrlCurrency';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { AutoPaySlice } from '../../pages/AutoPayCalc/slices/AutoPaySlices';

interface EarnCalculatorProps {
  paymentDate: Date | string;
  cost: number;
  lastDatePrior?: Date | string;
}

export const EarnCalculator = ({ paymentDate, cost, lastDatePrior }: EarnCalculatorProps) => {
  const dispatch = useAppDispatch();
  const [sumDividends, setSumDividens] = useState(0);
  const [newAmount, setAmount] = useState(0);

  const handleAddAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleAdd = () => {
    const newSumDividends = newAmount * cost;
    setSumDividens(newSumDividends);
    dispatch(
      AutoPaySlice.actions.addOwnerAmounts({
        proventsTotal: newSumDividends,
        quotesTotal: newAmount
      })
    );
    setAmount(0);
  };

  const incomeDate = String(lastDatePrior).slice(0, 10);

  const formatedDate = `${incomeDate.slice(8, 10)}/${incomeDate.slice(5, 7)}/${incomeDate.slice(
    0,
    4
  )}`;

  return (
    <div className={`border-slate-300 items-center flex gap-2`}>
      <div className=''>
        <PaymentDateInfo paymentDate={paymentDate} cost={cost} />
        <div className='flex justify-between'>
          <p>{String(formatedDate).slice(0, 10)}</p>
          <input
            onChange={handleAddAmount}
            value={newAmount === 0 ? '' : newAmount}
            className='w-16 text-center text-xs bg-white opacity-80'
            type='number'
            placeholder='bought'
          />
        </div>
      </div>
      <div className=' items-center flex flex-col'>
        <p>{decimalToBRLCurrency(sumDividends)}</p>
        <button
          onClick={handleAdd}
          className='bg-blue-500 text-xs hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded-md shadow'
        >
          Add
        </button>
      </div>
    </div>
  );
};
