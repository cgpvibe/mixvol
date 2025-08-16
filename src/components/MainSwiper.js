'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Swiper 필수 CSS를 임포트합니다.
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Autoplay CSS도 임포트합니다.
import 'swiper/css/effect-fade'; // EffectFade CSS를 추가합니다.

export default function MainSwiper() {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <Swiper
        // 필요한 모듈을 Swiper에 등록합니다.
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        // spaceBetween={50}
        slidesPerView={1}
        effect="fade"
        // navigation
        // pagination={{ clickable: true }}
        // 무한 반복 기능을 활성화합니다.
        loop={true}
        // 자동 재생 설정을 추가합니다.
        autoplay={{
          delay: 4000, // 2.5초마다 슬라이드 변경
          disableOnInteraction: false, // 사용자의 슬라이더 조작 후에도 자동 재생 지속
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="bg-blue-500 text-white flex items-center justify-center p-20">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-500 text-white flex items-center justify-center p-20">
            Slide 2
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}