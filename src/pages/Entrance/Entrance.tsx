import { useEffect, useState } from 'react';
import { Text } from '../../components/Text/Text';
import { useNavigate } from 'react-router-dom';

export default function Entrance() {
  const [flip, setFlip] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setFlip(true);
    }, 4000);
  }, []);

  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-center`}>
      {flip ? (
        <button
          onClick={() => navigate('/login')}
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
        >
          Entrar
        </button>
      ) : (
        <div className='flex flex-col items-center '>
          <img src='../../../public/favicon.svg' alt='logo' width={100} height={100} />
          <Text color='grey-2' size='small' opacity='massive'>
            Low Life Technology
          </Text>
        </div>
      )}
    </div>
  );
}
