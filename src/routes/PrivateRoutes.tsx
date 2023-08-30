import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Header } from '../components/Header/Header';

export default function PrivateRoutes() {
  // const [darkMode, setDarkMode] = useState(false);
  const Home = lazy(() => import('../pages/Home/Home'));
  const AutoPay = lazy(() => import('../pages/AutoPayCalc/AutoPayCalc'));

  const Register = lazy(() => import('../pages/Register/Registe'));
  return (
    <Suspense
      fallback={
        <div className='flex justify-center items-center w-full h-screen'>
          <p>Aguarde</p>
        </div>
      }
    >
      {/* <div
        className={`flex h-screen flex-col pt-10 transition-colors duration-5000 ${
          darkMode ? 'bg-neutral-700' : 'bg-neutral-400'
        }`}
      >
        <Header onClick={() => setDarkMode(!darkMode)} />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AutoPay' element={<AutoPay />} />
          </Routes>
        </BrowserRouter>
      </div> */}

      <div className='w-screen h-screen flex justify-center items-center '>
        <div className='w-[90%] h-[95%]'>
          <BrowserRouter>
            <Routes>
              <Route path='/' Component={Home} />
              <Route path='/register' Component={Register} />
              <Route path='/AutoPay' element={<AutoPay />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </Suspense>
  );
}
