// src/store/transition.js
import { create } from "zustand";

// zustand 상태 정의
// 전역에서 "어떤 페이지로 이동할지" 정보를 저장하기 위한 스토어
export const useTransitionStore = create((set) => ({
  // targetPath: 사용자가 이동하려는 경로 (예: "/about")
  targetPath: null,

  // setTargetPath: 경로를 업데이트하는 함수
  // 컴포넌트에서 setTargetPath("/about") 이런 식으로 호출하면 targetPath 값이 바뀜
  setTargetPath: (path) => set({ targetPath: path }),
}));
