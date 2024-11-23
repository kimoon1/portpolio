
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from '@/src/styles/main/projectthumb.module.scss'

const SwiperComponent = () => {
  return (
    <Swiper
      speed={400}
      spaceBetween={100}
      className={`${styles['swiper']}`}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
