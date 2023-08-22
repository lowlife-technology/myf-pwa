import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Entrace/EmailPhone/Login';
import { Secret } from '../pages/Entrace/Secret/Secret';

export default function PrivateRoutes() {
  const Home = lazy(() => import('../pages/Home/Home'));
  const Register = lazy(() => import('../pages/Register/Registe'));
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
          <Route path='/register' Component={Register} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
