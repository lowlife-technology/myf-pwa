import { HomeIcon, QueueListIcon } from '@heroicons/react/24/outline';
import { Text } from '../../../components/Text/Text';
import { SquaredBtn } from '../../../components/Buttons/SquaredBtn copy';

export const HomeHeader = () => {
  const currentMonth = String(new Date()).slice(4, 7);
  const currentYear = String(new Date().getFullYear());

  return (
    <div className='flex items-center justify-between md:h-full h-1/5 w-full'>
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
