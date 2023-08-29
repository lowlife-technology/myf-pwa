import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface DarkModeToggleProps {
  onClick: () => void;
}

const DarkModeToggle = ({ onClick }: DarkModeToggleProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Here you can add logic to switch between dark and light themes.
  };

  return (
    <button
      onClick={() => {
        toggleDarkMode();
        onClick();
      }}
      className={`relative w-12 h-6 transition-colors ${
        isDarkMode ? 'bg-gray-700' : 'bg-neutral-500'
      } rounded-full`}
    >
      <div
        className={`absolute top-0 left-0 w-6 h-6 ${
          isDarkMode ? ' bg-blue-100' : ' bg-blue-900'
        } rounded-full shadow-md transform transition-transform ${
          isDarkMode ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {isDarkMode ? (
          <SunIcon className='h-4 w-4 m-1 text-yellow-500' />
        ) : (
          <MoonIcon className='h-4 w-4 m-1 text-white' />
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;
