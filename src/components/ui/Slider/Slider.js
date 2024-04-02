import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../../index.css';
import { Navigation } from 'swiper/modules';
import arrowLeft from '../../../icons/arrowLeft.svg';
import arrowRight from '../../../icons/arrowRight.svg';
import { cn } from '../../../lib/utils';

export const Slider = ({ spaceBetween, slidesPerView, className, children }) => {
  return (
    <>
      <Swiper
        className={cn('w-full h-full', className)}
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
          disabledClass: 'swiper-button-disabled'
        }}
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide className="text-white">{children}</SwiperSlide>
        <div className="swiper-button image-swiper-button-prev">
          <img src={arrowLeft} />
        </div>
        <div className="swiper-button image-swiper-button-next right-0">
          <img src={arrowRight} />
        </div>
      </Swiper>
    </>
  );
};
