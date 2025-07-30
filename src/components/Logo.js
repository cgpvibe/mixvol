import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo({ width = 180, height = 38, className = '', href = '/', inverted = true }) {
  return (
    <Link href={href} className={className}>
      <Image
        className={inverted ? 'invert' : ''}
        src="/img/logo/mixvol.svg"
        alt="Next.js logo" // alt 텍스트도 프롭스로 받는 것을 고려해볼 수 있습니다.
        width={width}    // 프롭스로 받은 width 값 사용
        height={height}  // 프롭스로 받은 height 값 사용
        priority
      />
    </Link>
  );
}