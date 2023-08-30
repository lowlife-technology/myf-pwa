import { useEffect, useState } from 'react';
import { Text } from '../../components/Text/Text';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Buttons/Button';

export default function Entrance() {
  const [flip, setFlip] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setFlip(true);
    }, 4000);
  }, []);

  return (
    <div className={`w-screen h-screen flex items-center justify-center`}>
      <div className={`flex flex-col items-center justify-center`}>
        {flip ? (
          <Button onClick={() => navigate('/login')} text='Entrar' />
        ) : (
          <div className='flex flex-col items-center '>
            <img src='../../../public/logo.png' alt='logo' width={100} height={100} />
            <Text color='grey-2' size='small' opacity='massive'>
              Low Life Technology
            </Text>
          </div>
        )}
      </div>
    </div>
  );
}
