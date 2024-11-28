
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
        el: `.${styles['swiper-pagination']}`, //기본 클래스 설정
        bulletActiveClass: `${styles['swiper-pagination-bullet-active']}`, // 활성화된 불릿 클래스
        bulletClass: `${styles['swiper-pagination-bullet']}`,
        enabled: true,
        clickable: true,
      }}
      speed={500}
      spaceBetween={0}
      className={`${styles['swiper']}`}

    >
      <SwiperSlide>
        <div className={`${styles['img-wrap']}`}>
          <Image width={1536} height={1536} alt='test' src={'/home/ProjectThumb/exam01.jfif'} />
        </div>
        <a className={`${styles['project-link']}`} href='/'>
          <span>View Project</span>
          <span><Image width={18} height={18} src={'/home/ProjectThumb/linkArrow.svg'} alt='링크 연결' /></span>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles['img-warp']}`}>
          <Image width={1536} height={1536} alt='test' src={'/home/ProjectThumb/exam02.png'} />
        </div>
        <a className={`${styles['project-link']}`} href='/'>
          <span>View Project</span>
          <span><Image width={18} height={18} src={'/home/ProjectThumb/linkArrow.svg'} alt='링크 연결' /></span>
        </a>
      </SwiperSlide>
      <div className={`${styles['swiper-button-next']}`}>
        <Image width={40} height={40} alt='화살표' src={'/home/ProjectThumb/rightArrow.svg'} />
      </div>
      <div className={`${styles['swiper-button-prev']}`}>
        <Image width={40} height={40} alt='화살표' src={'/home/ProjectThumb/leftArrow.svg'} />
      </div>
      <div className={`${styles['swiper-pagination']}`}></div>
      <Image className={`${styles['bottom-right-img']}`} src={'/icon/round.svg'} width={20} height={20} alt='라운드' />
      <Image className={`${styles['bottom-left-img']}`} src={'/icon/round.svg'} width={20} height={20} alt='라운드' />
    </Swiper>
    <div className={`${styles['name-box']}`}>KIMOON</div>

  </>
  );
};

export default SwiperComponent;
