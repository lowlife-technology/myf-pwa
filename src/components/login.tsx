import { GoogleLogin } from 'react-google-login';

const clientiId = '647458061337-6412fk32mvk3ja8dfred442kujehpnoq.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('LOGIN SUCCESS! current user:', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('LOGIN FAILED! res:', res);
  };
  return (
    <div id='singInButton'>
      <GoogleLogin
        clientId={clientiId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'sing_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
