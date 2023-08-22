import { ReactNode } from 'react';
import { Text } from '../Text/Text';

interface PageWrapperProps {
  title: string;
  children: ReactNode;
}

export const PageWrapper = ({ title, children }: PageWrapperProps) => {
  return (
    <div className='w-screen h-screen flex flex-col items-center'>
      <div className=' h-[10%] flex items-end w-[90%]'>
        <Text size='mini'>{title}</Text>
      </div>
      <div className=' h-[80%]  flex w-[90%]'>{children}</div>
      <div className=' h-[10%] bg-gree-200 flex w-[90%] items-center justify-center'>
        <Text opacity='massive' size='mini'>
          Low Life Technology
        </Text>
      </div>
    </div>
  );
};
