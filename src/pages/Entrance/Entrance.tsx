import { useEffect, useState } from 'react';
import { Text } from '../../components/Text/Text';
import { useNavigate } from 'react-router-dom';

export default function Entrance() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div
      className={`w-screen h-screen flex flex-col items-center justify-center ${
        isVisible ? 'opacity-100 transition-opacity duration-150' : 'opacity-0'
      }`}
    >
      <img src='../../../public/favicon.ico' alt='logo' />
      <Text color='grey-2' size='small' opacity='massive'>
        Low Life Technology
      </Text>
    </div>
  );
}
