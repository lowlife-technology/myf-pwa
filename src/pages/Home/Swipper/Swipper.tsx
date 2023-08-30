import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useState } from 'react';
import { Charts } from './Charts/Charts';
import { useAppSelector } from '../../../hooks/useAppSelector';

interface SwipperProps {
  onSlideChange: (swiper: SwiperClass) => void;
}

export const Swipper = ({ onSlideChange }: SwipperProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const { boughtPerMonth } = useAppSelector((store) => store.AutoPayReducer.staticReducer);

  const onChangeSlide = (e: SwiperClass) => {
    setSlideIndex(e.activeIndex);
    console.log(e);
  };
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      fadeEffect={{ crossFade: true }}
      effect='fade'
      autoplay={{ delay: 20000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      onSlideChange={(e: SwiperClass) => {
        onSlideChange(e);
        onChangeSlide(e);
      }}
      className={`md:h-full  ${
        slideIndex === 2 || slideIndex === 3 || slideIndex === 4 ? 'w-screen h-screen' : ' '
      }`}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src='https://phvox.com.br/wp-content/uploads/2022/12/nova-era-new-age-1200x675.jpg'
          alt='slide1'
          width={'100%'}
          height={'100%'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='https://amedcine.com/cdn/shop/articles/Hippies_communaute_new_age.jpg?v=1676220632&width=4472'
          alt='slide2'
          width={'100%'}
          height={'100%'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <video autoPlay loop muted width={'4500px'} height={'100%'}>
          <source
            src='https://backgrounds.wetransfer.net/creator/wepresent/2307-p11/wp4-fs/1_hiMAhh/video.9cac73e2ab9e7c15040a.mp4'
            type='video/mp4'
            width={'100%'}
            height={'100%'}
          />
        </video>
      </SwiperSlide>
      <SwiperSlide>
        <video autoPlay loop muted width={'4500px'} height={'100%'}>
          <source
            src='https://download-video.akamaized.net/v2-1/playback/635a0efd-69d6-468a-b3ad-903a41bf4967/5cc26135?__token__=st=1693425702~exp=1693440102~acl=%2Fv2-1%2Fplayback%2F635a0efd-69d6-468a-b3ad-903a41bf4967%2F5cc26135%2A~hmac=b151d0d6ffbd30fb392577298f275676b374e5f35a1bf2e4c4a175b7b31629d1&r=dXMtY2VudHJhbDE%3D'
            type='video/mp4'
          />
        </video>
      </SwiperSlide>
      <SwiperSlide>
        <video autoPlay loop muted width={'4500px'} height={'100%'}>
          <source
            src='https://static.videezy.com/system/resources/previews/000/004/931/original/Backyard_4K_Living_Background.mp4'
            type='video/mp4'
          />
        </video>
      </SwiperSlide>
      <SwiperSlide>
        <Swiper effect='flip'>
          <img
            src='https://www.hardware.com.br/wp-content/uploads/2023/07/IA-Generativa-scaled.jpeg.png'
            alt='slide3'
            width={'100%'}
            height={'100%'}
          />
        </Swiper>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='https://imagens.ebc.com.br/SzUbdY84Hq08cSSDG6hRYmvAJ98=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/img_4538.jpg?itok=fMk_2XI1'
          alt='slide4'
          width={'100%'}
          height={'100%'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={` ${
            boughtPerMonth[0]?.valoresRecebidos ? '' : 'hidden'
          } w-full h-full flex justify-center`}
        >
          <Charts />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
