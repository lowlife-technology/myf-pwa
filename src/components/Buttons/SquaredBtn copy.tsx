import { ArrowLeftIcon, HomeIcon, QueueListIcon } from '@heroicons/react/24/outline';
import { JSXElementConstructor, ReactElement, cloneElement } from 'react';

export type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;
interface GoBackProps {
  onClick?: () => void;
  pressed?: boolean;
  icon: IconType;
}

export const SquaredBtn = ({ onClick, pressed, icon: Icon }: GoBackProps) => {
  const iconStyle = `w-5 h-5 text-grey-3`;

  return (
    <button
      onClick={onClick}
      className={`bg-brand-grey1 items-center flex justify-center rounded-md w-10 h-10 ${
        pressed ? 'shadow-inner' : 'shadow-button'
      } mr-1`}
    >
      <Icon className={iconStyle} />
    </button>
  );
};
