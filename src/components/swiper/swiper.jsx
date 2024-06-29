import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../projectparts/header/header.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className='SW'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={Infinity}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='SWPIMG' src="https://minio.alifnasiya.uz/shop/catalog/carousel/222/1719057815-1600x491.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='SWPIMG' src="https://minio.alifnasiya.uz/shop/catalog/carousel/215/1716885789-main_1600x491_uz.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='SWPIMG' src="https://minio.alifnasiya.uz/shop/catalog/carousel/216/1716976999-main_1600%D1%85491_uz.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='SWPIMG' src="https://minio.alifnasiya.uz/shop/catalog/carousel/218/1717994426-1600x491%20UZ.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='SWPIMG' src="https://minio.alifnasiya.uz/shop/catalog/carousel/221/1719057557-Televizor%20Alif%20shop%201600x491%20UZ.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='SWPIMG' src="https://minio.alifnasiya.uz/shop/catalog/carousel/223/1719230827-Artboard%201%20(2).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='SWPIMG' src="https://minio.alifnasiya.uz/shop/catalog/carousel/219/1718794461-1600%D1%85491%20%D1%83%D0%B7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='SWPIMG' src="https://minio.alifnasiya.uz/shop/catalog/carousel/220/1718972268-1600%D1%85491.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
