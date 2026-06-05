// src/components/experiments/ScrollTextReveal.js
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollTextReveal
 * GSAP ScrollTrigger를 사용해 텍스트를 단어 단위로 분해 후
 * 스크롤에 따라 순차적으로 나타나는 인터랙션 컴포넌트.
 *
 * @param {string}  text       - 표시할 텍스트
 * @param {string}  tag        - 렌더링할 HTML 태그 (기본 'p')
 * @param {string}  className  - 추가 클래스
 * @param {number}  stagger    - 단어 간 딜레이(초, 기본 0.05)
 */
export default function ScrollTextReveal({
  text = '',
  tag: Tag = 'p',
  className = '',
  stagger = 0.05,
}) {
  const containerRef = useRef(null);

  // 텍스트를 단어 단위로 분해
  const words = text.split(' ');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wordEls = containerRef.current?.querySelectorAll('.word-unit');
      if (!wordEls?.length) return;

      gsap.fromTo(
        wordEls,
        { y: '110%', opacity: 0, rotateX: -45 },
        {
          y: '0%',
          opacity: 1,
          rotateX: 0,
          duration: 0.7,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text, stagger]);

  return (
    <Tag
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="word-unit inline-block mr-[0.25em] overflow-hidden"
          style={{ perspective: '600px' }}
          aria-hidden="true"
        >
          <span className="word-unit inline-block">{word}</span>
        </span>
      ))}
    </Tag>
  );
}
