import { HomeIcon, QueueListIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { Text } from '../../../components/Text/Text';
import { SquaredBtn } from '../../../components/Buttons/SquaredBtn';
import { useNavigate } from 'react-router-dom';

export const HomeHeader = () => {
  const currentMonth = String(new Date()).slice(4, 7);
  const currentYear = String(new Date().getFullYear());

  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between md:h-1/5 h-1/5 w-full'>
      <div className='flex gap-2'>
        <SquaredBtn pressed icon={HomeIcon} />
        <SquaredBtn onClick={() => navigate('statement')} icon={QueueListIcon} />
        <SquaredBtn onClick={() => navigate('sideMyfHub')} icon={Squares2X2Icon} />
      </div>
      <div className='flex flex-col items-end gap-4'>
        <Text>
          {currentMonth} {currentYear}
        </Text>
        <Text>$ 75,00</Text>
      </div>
    </div>
  );
};
