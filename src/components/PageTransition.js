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
      gsap.set(".transition-overlay", { zIndex: 9999 });
      gsap.to(".transition-overlay", {
        y: 0,
        duration: 0.55,
        ease: "power3.inOut",
        onComplete: () => {
          router.push(targetPath);
          setTargetPath(null);
        },
      });
    }
  }, [targetPath]);

  useEffect(() => {
    gsap.to(".transition-overlay", {
      y: "100%",
      duration: 0.55,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(".transition-overlay", { y: "-100%", zIndex: -1 });
      },
    });
  }, [pathname]);

  return (
    <div
      className="transition-overlay fixed top-0 left-0 w-full h-full"
      style={{
        transform: "translateY(-100%)",
        zIndex: -1,
        background: "linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d1a3a 100%)",
      }}
    />
  );
}
