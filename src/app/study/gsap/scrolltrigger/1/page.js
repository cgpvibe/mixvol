// src/app/page.js
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// ScrollTrigger 플러그인을 GSAP에 등록합니다.
// 이 작업은 앱 전체에서 한 번만 하면 됩니다.
gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const boxRef = useRef(null);

  useEffect(() => {
    // ScrollTrigger 애니메이션 정의
    gsap.to(boxRef.current, {
      x: 500, // x축으로 500px 이동
      rotation: 360, // 360도 회전
      duration: 3, // 애니메이션 진행 시간
      scrollTrigger: {
        trigger: boxRef.current, // 애니메이션을 시작할 요소
        start: 'top center', // 애니메이션 시작 지점 (트리거 요소의 상단이 뷰포트의 중앙에 올 때)
        end: 'bottom center', // 애니메이션 종료 지점 (트리거 요소의 하단이 뷰포트의 상단에 올 때)
        scrub: true, // 스크롤에 따라 애니메이션 진행 (값: true 또는 숫자)
        markers: true, // 디버깅을 위한 마커 표시
      },
    });
  }, []);

  return (
    <div>
      <div className="h-screen w-full bg-gray-200">
        <h1 className="flex h-full items-center justify-center text-4xl">
          스크롤을 내려주세요
        </h1>
      </div>

      {/* 애니메이션을 적용할 네모 박스 */}
      <div
        ref={boxRef}
        className="w-24 h-24 bg-blue-500 rounded-lg shadow-lg"
      ></div>

      <div className="h-screen w-full bg-gray-200">
        <h1 className="flex h-full items-center justify-center text-4xl">
          스크롤 끝
        </h1>
      </div>
    </div>
  );
}