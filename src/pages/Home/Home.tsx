import { HomeHeader } from './Header/HomeHeader';
import { useForm } from 'react-hook-form';
import { Swipper } from './Swipper/Swipper';
import { SwiperClass } from 'swiper/react';
import { useState } from 'react';
import { FormBalance } from './FormBalance/FormBalance';

export default function Home() {
  const [videoTime, setVideoTime] = useState(0);
  const form = useForm();

  const videoSlides = videoTime === 2 || videoTime === 3 || videoTime === 4 || videoTime === 7;

  const handleSlide = (e: SwiperClass) => {
    setVideoTime(e.activeIndex);
  };
  const handleCategorySelect = (id: number) => {
    console.log(id);
  };
  return (
    <div className='flex flex-col h-full w-full'>
      <HomeHeader />
      <div className='flex h-full items-start justify-between gap-2 xl:h-4/5'>
        <FormBalance form={form} onClick={handleCategorySelect} />
        <div
          className={` hidden  ${videoSlides ? '' : 'xl:w-3/4 h-4/5'} xl:block ${
            videoSlides ? 'absolute top-0 left-0 -z-10 w-screen h-screen' : ''
          } `}
        >
          <Swipper onSlideChange={handleSlide} />
        </div>
      </div>
    </div>
  );
}
