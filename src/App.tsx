import { Provider } from 'react-redux';
import Route from './routes';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='flex '>
        <Route />
      </div>
    </Provider>
  );
}

export default App;
