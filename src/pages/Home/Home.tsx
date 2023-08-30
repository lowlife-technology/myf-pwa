import { Link } from 'react-router-dom';
import { HomeHeader } from './Header/HomeHeader';
import { Input } from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { ExpandableInput } from '../../components/Input/ExpandableInput';
import { CircleBtn } from '../../components/Buttons/CircleBtn';
import { Button } from '../../components/Buttons/Button';
import { Swipper } from './Swipper/Swipper';
import { SwiperClass } from 'swiper/react';
import { useState } from 'react';

export default function Home() {
  const [videoTime, setVideoTime] = useState(0);
  const form = useForm();

  const handleSlide = (e: SwiperClass) => {
    setVideoTime(e.activeIndex);
  };
  const handleCategorySelect = (id: number) => {
    console.log(id);
  };
  return (
    <div className='items-center md:gap-4 flex justify-between md:justify-start flex-col h-full md:h-4/5 w-full  '>
      <HomeHeader />
      <div className='flex md:gap-4 h-full w-full'>
        <div className='flex md:w-1/5 gap-10 flex-col w-full md:shadow-button md:px-10'>
          <div className='w-full gap-10 md:gap-8 md:py-4 flex flex-col h-full '>
            <Input label='Spend' placeholder='ex.: Gas station' name='spend' form={form} />
            <Input label='Amount' placeholder='$ 0,00' name='amount' form={form} />
            <Input label='Date' placeholder='10/20/2023' name='date' form={form} />
            <ExpandableInput
              label='Category'
              placeholder='Vehicle'
              name='category'
              form={form}
              onClick={handleCategorySelect}
              inputButton
            />
          </div>
          <div className='w-full flex flex-col md:gap-5 justify-between h-full'>
            <div className='w-full items-center flex justify-between'>
              <CircleBtn pressed rigthText='Gain' />
              <CircleBtn leftText='Loss' />
            </div>
            <Button text='New loss' />
            <Link className='text-xs text-blue-500 underline' to='/AutoPay'>
              AutoPay
            </Link>
          </div>
        </div>
        <div
          className={` hidden md:block ${
            videoTime === 2 ? 'absolute top-0 left-0 -z-10 w-screen h-screen' : ' md:w-4/5'
          } `}
        >
          <Swipper onSlideChange={handleSlide} />
        </div>
      </div>
    </div>
  );
}
