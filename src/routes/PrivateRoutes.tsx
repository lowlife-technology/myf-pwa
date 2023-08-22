import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Entrace/EmailPhone/Login';
import { Secret } from '../pages/Entrace/Secret/Secret';

export default function PrivateRoutes() {
  const Home = lazy(() => import('../pages/Home/Home'));
  const PhoneEmail = lazy(
    () => import('../pages/Register/PhoneEmail/PhoneEmail')
  );
  return (
    <Suspense
      fallback={
        <div className='flex justify-center items-center w-full h-screen'>
          <p>Aguarde</p>
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/register' Component={PhoneEmail} />
          <Route path='/login' Component={Login} />
          <Route path='/secret' Component={Secret} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
