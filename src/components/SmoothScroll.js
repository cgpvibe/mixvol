// components/SmoothScroll.js
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll() {
  useEffect(() => {
    // ScrollSmoother 초기화
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2, // 숫자가 클수록 더 부드럽게
      effects: true, // data-speed, data-lag 효과 활성화
    });

    return () => {
      // cleanup
      smoother.kill();
    };
  }, []);

  return null; // UI 없음
}
