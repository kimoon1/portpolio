
'use client';

import React from 'react';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '@/src/styles/main/projectthumb.module.scss'
import Image from 'next/image';

const SwiperComponent = () => {
  return (<>
    <Swiper
      wrapperClass={`swiper-wrapper ${styles['swiper-wrapper']}`}
      modules={[Navigation, Pagination]}
      navigation={{
        enabled: true,
        nextEl: `.${styles['swiper-button-next']}`,
        prevEl: `.${styles['swiper-button-prev']}`,
        disabledClass: `${styles['swiper-button-disabled']}`
      }}
      pagination={{ 
        enabled: true,
        clickable: true,
       }}
      speed={500}
      spaceBetween={0}
      className={`${styles['swiper']}`}
      
    >
      <SwiperSlide>
        <div className={`${styles['img-wrap']}`}>

          <Image width={1536} height={1536} alt='test' src={'/home/ProjectThumb/test01.jpg'} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles['img-warp']}`}>
          <Image width={1536} height={1536} alt='test' src={'/home/ProjectThumb/test02.jpg'} />
        </div>
      </SwiperSlide>
      <div className={`${styles['swiper-button-next']}`}>
        <Image width={40} height={40} alt='화살표' src={'/home/ProjectThumb/rightArrow.svg'} />
      </div>
      <div className={`${styles['swiper-button-prev']}`}>
        <Image width={40} height={40} alt='화살표' src={'/home/ProjectThumb/leftArrow.svg'} />
      </div>
    </Swiper>
  </>
  );
};

export default SwiperComponent;
