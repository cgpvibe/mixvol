"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { useTransitionStore } from "@/store/transition";

export default function PageTransition() {
  const { targetPath, setTargetPath } = useTransitionStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (targetPath) {
      // overlay 맨 위로
      gsap.set(".transition-overlay", { zIndex: 9999 });

      // 내려와서 덮기
      gsap.to(".transition-overlay", {
        y: 0,
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => {
          // 페이지 이동
          router.push(targetPath);
          setTargetPath(null);
        },
      });
    }
  }, [targetPath]);

  // pathname이 바뀌면 (즉 새 페이지가 로드되면) -> 아래로 사라지기
  useEffect(() => {
    gsap.to(".transition-overlay", {
      y: "100%",
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        // 초기 상태로 되돌리기
        gsap.set(".transition-overlay", { y: "-100%", zIndex: -1 });
      },
    });
  }, [pathname]);

  return (
    <div
      className="transition-overlay fixed top-0 left-0 w-full h-full bg-black"
      style={{ transform: "translateY(-100%)", zIndex: -1 }}
    />
  );
}
