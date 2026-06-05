// src/app/lab/page.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ScrollTextReveal from '@/components/experiments/ScrollTextReveal';
import LayoutExpand from '@/components/experiments/LayoutExpand';
import MagneticButton from '@/components/experiments/MagneticButton';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

/* ── 섹션 데이터 ── */
const sections = [
  { id: 'scroll-reveal', label: 'Scroll Text Reveal' },
  { id: 'layout-expand', label: 'Layout Expand' },
  { id: 'magnetic', label: 'Magnetic Button' },
];

/* ── Layout Expand용 카드 데이터 ── */
const expandCards = [
  { id: 'c1', title: 'GSAP ScrollTrigger', description: 'GSAP의 ScrollTrigger 플러그인을 사용해 스크롤에 따라 요소를 고정하고 순차적으로 등장시키는 고급 애니메이션 기법입니다. Next.js App Router의 Client Component 내에서 useEffect + useRef로 안전하게 통합합니다.', bg: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' },
  { id: 'c2', title: 'Framer Motion layoutId', description: 'layoutId prop을 통해 두 개의 다른 DOM 요소 사이를 자동으로 보간하는 Framer Motion의 공유 레이아웃 애니메이션입니다. 카드 → 전체화면 전환처럼 복잡해 보이는 애니메이션을 단 몇 줄로 구현합니다.', bg: 'linear-gradient(135deg, #0f172a 0%, #0c4a6e 100%)' },
  { id: 'c3', title: 'useMagnet Hook', description: 'GSAP quickTo API를 활용해 마우스 근접 시 요소를 부드럽게 당기는 커스텀 훅입니다. requestAnimationFrame 기반으로 60fps를 보장하며, elastic ease로 자연스러운 복귀 모션을 제공합니다.', bg: 'linear-gradient(135deg, #1a0533 0%, #4c1d95 100%)' },
  { id: 'c4', title: 'Page Transition', description: 'Zustand 전역 상태와 GSAP 타임라인을 결합한 페이지 전환 시스템입니다. 메뉴 클릭 → 오버레이 등장 → 라우팅 → 오버레이 퇴장의 완전한 시퀀스를 Next.js App Router에서 구현합니다.', bg: 'linear-gradient(135deg, #052e16 0%, #14532d 100%)' },
];

/* ── Magnetic Demo 컴포넌트 (인라인) ── */
function MagneticDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-12">
      {[
        { label: 'Primary', style: { background: 'linear-gradient(135deg, #7c3aed, #2563eb)', boxShadow: '0 0 30px rgba(124,58,237,0.4)' } },
        { label: 'Ghost', style: { border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' } },
        { label: 'Accent', style: { background: 'linear-gradient(135deg, #0891b2, #059669)', boxShadow: '0 0 30px rgba(8,145,178,0.3)' } },
      ].map((btn) => (
        <MagneticDemoBtn key={btn.label} label={btn.label} style={btn.style} />
      ))}
    </div>
  );
}

function MagneticDemoBtn({ label, style }) {
  return (
    <MagneticButton className="rounded-full px-8 py-3.5 text-sm font-semibold text-white" style={style}>
      {label}
    </MagneticButton>
  );
}

/* ── 메인 컴포넌트 ── */
export default function LabPage() {
  const [activeSection, setActiveSection] = useState('scroll-reveal');

  return (
    <main className="relative min-h-screen px-6 pt-28 pb-24">
      {/* 배경 */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true" style={{ background: 'radial-gradient(ellipse 70% 50% at 30% 20%, rgba(124,58,237,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 70% 70%, rgba(8,145,178,0.08) 0%, transparent 60%)' }} />

      {/* ── 헤더 ── */}
      <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-5xl">
        <motion.div variants={fadeUp} className="mb-3 flex items-center gap-2 text-xs text-white/30">
          <Link href="/" className="hover:text-white/60 transition">Home</Link>
          <span>/</span>
          <span className="text-white/60">Lab</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="mb-3 text-4xl font-black text-white sm:text-5xl">
          Interactive Lab
        </motion.h1>
        <motion.p variants={fadeUp} className="mb-10 max-w-2xl text-base text-white/45">
          GSAP · Framer Motion · Custom Hooks의 프로덕션 레퍼런스 구현체.
          각 실험을 클릭해 코드와 인터랙션을 탐색하세요.
        </motion.p>

        {/* ── 탭 네비게이션 ── */}
        <motion.div variants={fadeUp} className="mb-10 flex flex-wrap gap-2">
          {sections.map((s) => (
            <button
              key={s.id}
              id={`tab-${s.id}`}
              onClick={() => setActiveSection(s.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${activeSection === s.id ? 'bg-white/15 text-white' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70'}`}
            >
              {s.label}
            </button>
          ))}
        </motion.div>

        {/* ── 실험 패널 ── */}
        <AnimatePresence mode="wait">
          {activeSection === 'scroll-reveal' && (
            <motion.section
              key="scroll-reveal"
              id="section-scroll-reveal"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/8 bg-white/3 p-8 backdrop-blur-sm"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <span className="mb-2 inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-violet-300">GSAP · ScrollTrigger</span>
                  <h2 className="text-xl font-bold text-white">Text Word Reveal</h2>
                  <p className="mt-1 text-sm text-white/45">텍스트를 단어 단위로 분해 후 스크롤 진입 시 perspective 3D로 순차 등장</p>
                </div>
                <Link href="/study/gsap/scrolltrigger/1" className="flex-shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60 transition hover:border-white/20 hover:text-white/80">
                  전체 데모 →
                </Link>
              </div>

              <div className="rounded-2xl border border-white/8 bg-black/20 p-8">
                <ScrollTextReveal
                  text="GSAP ScrollTrigger로 구현하는 고품질 텍스트 애니메이션. 단어 단위로 분해해 perspective 기반 3D 회전 효과와 함께 스크롤에 반응합니다."
                  tag="p"
                  className="text-2xl font-light leading-relaxed text-white"
                  stagger={0.06}
                />
                <div className="mt-8">
                  <ScrollTextReveal
                    text="Production-ready. 60 FPS. Reusable."
                    tag="p"
                    className="text-4xl font-black text-white/30"
                    stagger={0.12}
                  />
                </div>
              </div>

              {/* 코드 스니펫 */}
              <div className="mt-6 rounded-xl border border-white/8 bg-black/40 p-5">
                <p className="mb-2 text-[10px] font-medium tracking-widest text-white/25 uppercase">Usage</p>
                <pre className="overflow-x-auto text-xs text-white/60"><code>{`import ScrollTextReveal from '@/components/experiments/ScrollTextReveal';

<ScrollTextReveal
  text="스크롤에 반응하는 텍스트"
  tag="h2"
  stagger={0.06}
/>`}</code></pre>
              </div>
            </motion.section>
          )}

          {activeSection === 'layout-expand' && (
            <motion.section
              key="layout-expand"
              id="section-layout-expand"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/8 bg-white/3 p-8 backdrop-blur-sm"
            >
              <div className="mb-6">
                <span className="mb-2 inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-300">Framer Motion · layoutId</span>
                <h2 className="text-xl font-bold text-white">Layout Expand</h2>
                <p className="mt-1 text-sm text-white/45">카드를 클릭해 전체화면으로 확장되는 공유 레이아웃 트랜지션을 체험해보세요</p>
              </div>

              <LayoutExpand cards={expandCards} />

              <div className="mt-6 rounded-xl border border-white/8 bg-black/40 p-5">
                <p className="mb-2 text-[10px] font-medium tracking-widest text-white/25 uppercase">Key Concept</p>
                <pre className="overflow-x-auto text-xs text-white/60"><code>{`// 같은 layoutId를 공유하면 Framer Motion이
// 두 요소 사이를 자동으로 보간합니다
<motion.li layoutId={\`card-\${id}\`} />

// 확장된 오버레이에도 같은 layoutId
<motion.div layoutId={\`card-\${id}\`} />`}</code></pre>
              </div>
            </motion.section>
          )}

          {activeSection === 'magnetic' && (
            <motion.section
              key="magnetic"
              id="section-magnetic"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/8 bg-white/3 p-8 backdrop-blur-sm"
            >
              <div className="mb-6">
                <span className="mb-2 inline-block rounded-full border border-rose-400/30 bg-rose-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-rose-300">GSAP · Custom Hook</span>
                <h2 className="text-xl font-bold text-white">Magnetic Button</h2>
                <p className="mt-1 text-sm text-white/45">버튼에 마우스를 가까이 가져가보세요. GSAP quickTo 기반 자석 인터랙션</p>
              </div>

              <div className="rounded-2xl border border-white/8 bg-black/20 px-8 py-16">
                <MagneticDemo />
              </div>

              <div className="mt-6 rounded-xl border border-white/8 bg-black/40 p-5">
                <p className="mb-2 text-[10px] font-medium tracking-widest text-white/25 uppercase">Hook Signature</p>
                <pre className="overflow-x-auto text-xs text-white/60"><code>{`import { useMagnet } from '@/components/hooks/useMagnet';

const { ref, onMouseMove, onMouseLeave } = useMagnet({
  strength: 0.35,  // 당김 강도 (0~1)
  radius: 90,      // 감지 반경 (px)
});

// willChange: 'transform' 으로 GPU 가속 활성화
<button ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
  Magnetic
</button>`}</code></pre>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
