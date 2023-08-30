import { HomeHeader } from './Header/HomeHeader';
import { useForm } from 'react-hook-form';
import { Swipper } from './Swipper/Swipper';
import { SwiperClass } from 'swiper/react';
import { useState } from 'react';
import { FormBalance } from './FormBalance/FormBalance';

export default function Home() {
  const [videoTime, setVideoTime] = useState(0);
  const form = useForm();

  const handleSlide = (e: SwiperClass) => {
    console.log(e.activeIndex);

    setVideoTime(e.activeIndex);
  };
  const handleCategorySelect = (id: number) => {
    console.log(id);
  };
  return (
    <div className='flex flex-col h-full w-full'>
      <HomeHeader />
      <div className='flex h-full items-start gap-2 md:h-4/5'>
        <FormBalance form={form} onClick={handleCategorySelect} />
        <div
          className={` hidden  ${
            videoTime === 2 || videoTime === 3 || videoTime === 4 ? '' : 'md:w-4/5 h-4/5'
          } md:block ${
            videoTime === 2 || videoTime === 3 || videoTime === 4
              ? 'absolute top-0 left-0 -z-10 w-screen h-screen'
              : ''
          } `}
        >
          <Swipper onSlideChange={handleSlide} />
        </div>
      </div>
    </div>
  );
}
