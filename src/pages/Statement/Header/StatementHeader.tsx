import { Text } from '../../../components/Text/Text';
import { useNavigate } from 'react-router-dom';
import { GoBack } from '../../../components/Buttons/GoBack';
import { Filter } from '../Filter/Filter';

export const StatementHeader = () => {
  const currentMonth = String(new Date()).slice(4, 7);
  const currentYear = String(new Date().getFullYear());

  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between md:h-1/5 h-1/5 xl:h-[15vh] w-full pt-10'>
      <div className='flex flex-col items-start gap-4'>
        <Text>
          {currentMonth} {currentYear}
        </Text>
        <Text>$ 75,00</Text>
      </div>
      <div className='xl:flex xl:flex-col gap-2 hidden w-96'>
        <Filter />
      </div>
      <div className='flex gap-2'>
        <GoBack onClickBack={() => navigate('/')} />
      </div>
    </div>
  );
};
