import { CalendarIcon } from '@heroicons/react/24/outline';
import { ReactNode, useState } from 'react';
import { Tooltip } from 'react-tooltip';

interface DrawerProps {
  children?: ReactNode;
}

export const Drawer = ({ children }: DrawerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className='absolute top-2/4 right-4'>
      <div className='text-center'>
        <button
          onClick={toggleDrawer}
          data-tooltip-id='payouts'
          className='text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          type='button'
        >
          <div className='text-xs flex-col flex items-center'>
            <CalendarIcon className='w-5 h-5' />
            <p>Payouts</p>
          </div>
        </button>
      </div>

      <div
        id='drawer-example'
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white w-80 dark:bg-gray-800`}
        tabIndex={0}
        aria-labelledby='drawer-label'
      >
        <h5
          id='drawer-label'
          data-tooltip-id='my-tooltip'
          data-tooltip-content={`Set the stock's amount you bought between dates!`}
          className='inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400'
        >
          <svg
            className='w-4 h-4 mr-2.5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
          </svg>
          Payout and Bought
        </h5>
        <Tooltip
          style={{
            backgroundColor: 'rgb(64 64 64 / var(--tw-bg-opacity))',
            height: '6%',
            textAlign: 'center',
            width: '70%',
            marginLeft: 40
          }}
          id='my-tooltip'
        />
        <button
          type='button'
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          data-drawer-hide='drawer-example'
          aria-controls='drawer-example'
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white'
        >
          <svg
            className='w-3 h-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
            />
          </svg>
          <span className='sr-only'>Close menu</span>
        </button>
        <div className='mb-6 text-sm text-gray-500 dark:text-gray-400 items-center flex justify-center'>
          {children}
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {/* <a
            href='#'
            className='px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
          >
            Learn more
          </a> */}
          {/* <a
            href='#'
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            Get access{' '}
            <svg
              class='w-3.5 h-3.5 ml-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
};
