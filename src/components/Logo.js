// components/Logo.js
"use client";
import Image from 'next/image';
import React from 'react';
import { useTransitionStore } from "@/store/transition"; // zustand 스토어 불러오기

export default function Logo({ className = '', href = '/', inverted = true, alt = "Mixvol" }) {
  const setTargetPath = useTransitionStore((s) => s.setTargetPath);
  return (
    <div onClick={() => setTargetPath(href)} href={href} className={`relative block h-full cursor-pointer ${className} `}>
      <Image
        className={`${inverted ? 'invert' : ''} object-contain`}
        src="/img/logo/mixvol.svg"
        alt={alt}
        fill
        sizes="(max-width: 768px) 100px, 150px"
        priority
      />
    </div>
  );
}