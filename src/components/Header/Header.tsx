import { useState } from 'react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

interface HeaderProps {
  onClick: () => void;
}

export const Header = ({ onClick }: HeaderProps) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`h-10 p-8 w-screen flex justify-between items-center`}>
      <img
        src={darkMode ? '../../public/Myf-40x20-white.svg' : '../../../public/Myf-40-20.svg'}
        alt='myf'
      />
      <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-800'} font-light`}>
        Autonomous Portfolio
      </p>
      <DarkModeToggle
        onClick={() => {
          onClick(), setDarkMode(!darkMode);
        }}
      />
    </div>
  );
};
