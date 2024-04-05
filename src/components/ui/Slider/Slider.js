import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../../index.css';
import { Navigation } from 'swiper/modules';
import arrowLeft from '../../../icons/arrowLeft.svg';
import arrowRight from '../../../icons/arrowRight.svg';
import { HorizontalLayout } from '../HorizontalLayout/HorizontalLayout';

export const Slider = ({ spaceBetween, slidesPerView, className, children }) => {
  return (
    <HorizontalLayout align="center" className={className}>
      <div className="swiper-button image-swiper-button-prev mr-10 lg:ml-15">
        <img src={arrowLeft} alt="arrowLeft" />
      </div>
      <Swiper
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
          disabledClass: 'swiper-button-disabled'
        }}
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}>
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child ?? ''}</SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button image-swiper-button-next ml-10 lg:ml-15">
        <img src={arrowRight} alt="arrowRight" />
      </div>
    </HorizontalLayout>
  );
};
