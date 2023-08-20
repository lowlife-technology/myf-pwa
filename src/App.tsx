import LoginButton from './components/login';
import LogoutButton from './components/logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientiId = '647458061337-6412fk32mvk3ja8dfred442kujehpnoq.apps.googleusercontent.com';

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientiId: clientiId,
        scope: ''
      });
    }

    gapi.load('client:auth2', start);
  });
  return (
    <>
      <div className='bg-blue-200'>MYF PWA</div>
    </>
  );
}

export default App;
