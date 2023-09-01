import { useState } from 'react';
import { Filter } from './Filter/Filter';
import { StatementHeader } from './Header/StatementHeader';
import { StatementList } from './StatmentList/StatmentList';
import { Text } from '../../components/Text/Text';
import { decimalToBRLCurrency } from '../../functions/DecimalToBrlCurrency';

export default function Statement() {
  const [movimentDetails, setMovimentDetails] = useState({
    moment: '',
    category: '',
    loss: false,
    change: 0
  });

  const handleMovimentSelect = (
    moment: string,
    category: string,
    loss: boolean,
    change: number
  ) => {
    setMovimentDetails({ moment, category, loss, change });
  };

  return (
    <div className='flex flex-col h-full w-full overflow-hidden xl:pb-0 pb-96'>
      <StatementHeader />
      <div className='xl:hidden pt-10 '>
        <Filter />
      </div>
      <div className='flex items-center justify-center xl:mt-0 mt-10'>
        <StatementList onClick={handleMovimentSelect} />
        <div className='w-4/5 xl:h-[85vh] h-full hidden items-center justify-center gap-10 xl:flex xl:flex-col'>
          <Text>R$ {decimalToBRLCurrency(movimentDetails.change)}</Text>
          <Text>{movimentDetails.category}</Text>
          <Text>{movimentDetails.loss}</Text>
          <Text>{movimentDetails.moment}</Text>
        </div>
      </div>
    </div>
  );
}
