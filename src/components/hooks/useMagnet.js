// src/components/hooks/useMagnet.js
'use client';

import { useRef, useCallback } from 'react';
import gsap from 'gsap';

/**
 * useMagnet
 * 마우스 근접 시 요소가 자석처럼 당겨지는 효과를 주는 커스텀 훅.
 * GSAP quickTo를 사용해 60fps 부드러운 인터랙션을 보장합니다.
 *
 * @param {number} strength - 당김 강도 (0~1, 기본값 0.4)
 * @param {number} radius   - 감지 반경(px, 기본값 80)
 */
export function useMagnet({ strength = 0.4, radius = 80 } = {}) {
  const ref = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;

      // quickTo는 한 번만 생성합니다.
      if (!xTo.current) {
        xTo.current = gsap.quickTo(ref.current, 'x', {
          duration: 0.4,
          ease: 'power3.out',
        });
        yTo.current = gsap.quickTo(ref.current, 'y', {
          duration: 0.4,
          ease: 'power3.out',
        });
      }

      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius) {
        xTo.current(dx * strength);
        yTo.current(dy * strength);
      }
    },
    [strength, radius]
  );

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)',
    });
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
