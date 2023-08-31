import { Text } from '../Text/Text';

interface ButtonProps {
  onClick?: () => void;
  pressed?: boolean;
  label?: string;
  text?: string;
  color?: 'green' | 'red';
}

export const Button = ({ onClick, pressed, color, label, text = 'text' }: ButtonProps) => {
  let btnCollor = `bg-brand-grey1`;

  switch (color) {
    case 'green':
      btnCollor = 'bg-green-100';
      break;
    case 'red':
      btnCollor = 'bg-red-100';
      break;

    default:
      break;
  }

  return (
    <div className='flex flex-col w-full gap-3'>
      <Text>{label}</Text>
      <button
        onClick={onClick}
        className={` ${btnCollor} transition-colors delay-100 ease-in-out items-center flex justify-center p-4  w-full rounded-full h-10 ${
          pressed ? 'shadow-inner' : 'shadow-button'
        } mr-1`}
      >
        <Text>{text}</Text>
      </button>
    </div>
  );
};
