import { Text } from '../../../components/Text/Text';
import { decimalToBRLCurrency } from '../../../functions/DecimalToBrlCurrency';
import { MovimentsProps } from '../services/categories';

export interface StatmentItemProps extends MovimentsProps {
  onClick: (moment: string, category: string, loss: boolean, change: number) => void;
}

export const StatmentItem = ({
  description,
  moment,
  change,
  category,
  loss,
  onClick
}: StatmentItemProps) => {
  function getRandomColor() {
    const colors = ['bg-red-300', 'bg-blue-300', 'bg-green-300', 'bg-grey-2'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  // Example usage:
  const randomColor = getRandomColor();

  return (
    <div
      onClick={() => onClick(moment, category, loss, change)}
      className='flex flex-col cursor-pointer gap-4 border-b border-grey-2 py-1 pt-10  xl:max-w-[250px] xl:max-h-[100px] xl:pt-0 xl:gap-12 '
    >
      <div className='flex justify-between '>
        <Text size='mini'>{moment}</Text>
        <Text size='mini' color={loss ? 'red-1' : 'grey-1'}>{`R$ ${decimalToBRLCurrency(
          change
        )}`}</Text>
      </div>
      <div className='flex justify-between'>
        <Text size='mini'>{description}</Text>
        <div className='flex items-center gap-1'>
          <Text size='mini'>{category}</Text>
          <div className={`w-3 h-3 ${randomColor} rounded-full`}></div>
        </div>
      </div>
    </div>
  );
};
