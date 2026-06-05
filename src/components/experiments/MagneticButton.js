// src/components/experiments/MagneticButton.js
'use client';

import { useMagnet } from '@/components/hooks/useMagnet';

/**
 * MagneticButton
 * useMagnet 훅을 활용한 마그네틱 버튼 컴포넌트.
 * 마우스 근접 시 GSAP quickTo 기반으로 자연스럽게 당겨지는 인터랙션을 제공합니다.
 */
export default function MagneticButton({
  children,
  href,
  className = '',
  strength = 0.35,
  radius = 90,
  style,
  ...props
}) {
  const { ref, onMouseMove, onMouseLeave } = useMagnet({ strength, radius });

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`magnetic-btn relative inline-flex items-center justify-center overflow-hidden ${className}`}
      style={{ willChange: 'transform', ...style }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Tag>
  );
}
