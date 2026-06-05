// app/layout.js

import "./globals.css";
import './custom.css';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "mixvol — Interactive Animation Playground",
  description: "A high-quality open-source reference library for creative frontend engineering. Explore GSAP ScrollTrigger, Framer Motion layout animations, and custom interaction hooks in a modern Next.js production environment.",
  keywords: ["GSAP", "Framer Motion", "Next.js", "animation", "interactive", "frontend", "open source"],
  openGraph: {
    title: "mixvol — Interactive Animation Playground",
    description: "Production-ready reference implementations of GSAP timelines, Framer Motion layout animations, scroll-based physics, and custom React hooks.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`antialiased pt-0 font-pretendard`}>
        {/* 스크롤 스무더 적용 */}
        <SmoothScroll />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <PageTransition />
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}