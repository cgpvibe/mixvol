"use client";

import React from "react";
import { menuItems } from "@/data/menuData";
import { useTransitionStore } from "@/store/transition"; // zustand store 불러오기
import { usePathname } from "next/navigation"; // 현재 경로 가져오기

export default function Menu() {
  const setTargetPath = useTransitionStore((s) => s.setTargetPath);
  const pathname = usePathname(); // 현재 페이지 주소

  return (
    <nav>
      <ul className="flex items-center gap-x-5 bg-black/0 font-extralight">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href; // 현재 경로와 메뉴 경로 비교
          return (
            <li key={index}>
              <button
                onClick={() => {
                  if (!isActive) setTargetPath(item.href);
                }}
                disabled={isActive} // 현재 페이지면 버튼 비활성화
                className={`cursor-pointer ${isActive ? "cursor-default underline" : ""
                  }`}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
