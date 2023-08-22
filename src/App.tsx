
const clientiId = '647458061337-6412fk32mvk3ja8dfred442kujehpnoq.apps.googleusercontent.com';
import Route from './routes';


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
    <div className='flex h-full bg-brand-grey1'>
      <Route />
    </div>
  );
}

export default App;
