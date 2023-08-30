import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

interface SwipperProps {
  onSlideChange?: (swiper: SwiperClass) => void;
}

export const Swipper = ({ onSlideChange }: SwipperProps) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true
      }}
      navigation={true}
      autoplay={{ delay: 20000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      onSlideChange={onSlideChange}
      effect='fade'
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
        <video autoPlay loop muted>
          <source
            src='https://backgrounds.wetransfer.net/creator/wepresent/2307-p11/wp4-fs/1_hiMAhh/video.9cac73e2ab9e7c15040a.mp4'
            type='video/mp4'
            width={'100%'}
            height={'100%'}
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
    </Swiper>
  );
};
