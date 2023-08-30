import { HomeIcon, QueueListIcon } from '@heroicons/react/24/outline';
import { SquaredBtn } from '../../../components/Buttons/SquaredBtn';
import { Text } from '../../../components/Text/Text';

export const HomeHeader = () => {
  const currentMonth = String(new Date()).slice(4, 7);
  const currentYear = String(new Date().getFullYear());

  return (
    <div className='flex items-center justify-between w-full'>
      <div className='flex gap-2'>
        <SquaredBtn pressed icon={HomeIcon} />
        <SquaredBtn icon={QueueListIcon} />
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
