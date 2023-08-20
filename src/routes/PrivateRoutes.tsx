import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function PrivateRoutes() {
  const Home = lazy(() => import('../pages/Home/Home'));
  const AutoPay = lazy(() => import('../pages/AutoPayCalc/AutoPayCalc'));
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
          <Route path='/AutoPay' Component={AutoPay} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
