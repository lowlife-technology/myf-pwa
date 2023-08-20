import { GoogleLogout } from 'react-google-login';

const clientiId = '647458061337-6412fk32mvk3ja8dfred442kujehpnoq.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('LOGOUT SUCCESS! ');
  };

  return (
    <div id='singOutButton'>
      <GoogleLogout clientId={clientiId} buttonText='Logout' onLogoutSuccess={onSuccess} />
    </div>
  );
}

export default Logout;
