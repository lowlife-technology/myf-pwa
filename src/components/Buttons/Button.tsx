import { Text } from '../Text/Text';

interface ButtonProps {
  onClick?: () => void;
  pressed?: boolean;
  label?: string;
  text?: string;
}

export const Button = ({ onClick, pressed, label, text = 'text' }: ButtonProps) => {
  return (
    <div className='flex flex-col w-full gap-3'>
      <Text>{label}</Text>
      <button
        onClick={onClick}
        className={`bg-brand-grey1 items-center flex justify-center p-4  w-full rounded-full h-10 ${
          pressed ? 'shadow-inner' : 'shadow-button'
        } mr-1`}
      >
        <Text>{text}</Text>
      </button>
    </div>
  );
};