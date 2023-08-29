import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function PublicRoutes() {
  const Entrance = lazy(() => import('../pages/Entrance/Entrance'));
  const Register = lazy(() => import('../pages/Register/Registe'));
  const Login = lazy(() => import('../pages/Entrance/Login/Login'));
  const Secret = lazy(() => import('../pages/Entrance/Secret/Secret'));
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
          <Route path='/' Component={Entrance} />
          <Route path='/register' Component={Register} />
          <Route path='/login' Component={Login} />
          <Route path='/secret' Component={Secret} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
