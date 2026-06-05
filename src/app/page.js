// src/app/page.js
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Link from 'next/link';

const labCards = [
  { id: 'scroll-trigger', category: 'GSAP', title: 'ScrollTrigger Pin & Reveal', desc: '스크롤에 연동된 요소 고정 및 순차 등장 애니메이션', href: '/study/gsap/scrolltrigger/1', gradient: 'from-violet-600/20 to-indigo-800/20', accent: '#7c3aed', tag: 'ScrollTrigger' },
  { id: 'magnetic', category: 'GSAP', title: 'Magnetic Interaction', desc: 'quickTo API 기반 마우스 근접 자석 인터랙션', href: '/lab', gradient: 'from-rose-600/20 to-pink-800/20', accent: '#e11d48', tag: 'useMagnet Hook' },
  { id: 'layout-expand', category: 'Framer Motion', title: 'Layout Expand', desc: 'layoutId 공유로 카드 → 전체화면 공유 레이아웃 트랜지션', href: '/lab', gradient: 'from-cyan-600/20 to-teal-800/20', accent: '#0891b2', tag: 'layoutId' },
  { id: 'text-reveal', category: 'GSAP', title: 'Text Word Reveal', desc: '단어 단위 분해 + perspective 3D 스크롤 등장 효과', href: '/lab', gradient: 'from-amber-600/20 to-orange-800/20', accent: '#d97706', tag: 'ScrollTrigger' },
  { id: 'page-transition', category: 'GSAP', title: 'Page Transition', desc: 'Zustand + GSAP 기반 전역 페이지 전환 오버레이', href: '/lab', gradient: 'from-emerald-600/20 to-green-800/20', accent: '#059669', tag: 'Zustand' },
  { id: 'coming-soon', category: 'Framer Motion', title: 'Physics Scroll', desc: '스크롤 속도에 반응하는 유체 물리 인터랙션 (개발 중)', href: '/lab', gradient: 'from-slate-600/20 to-slate-800/20', accent: '#64748b', tag: 'Coming Soon', wip: true },
];

const stackBadges = [
  { name: 'Next.js 15', color: '#ffffff' },
  { name: 'React 19', color: '#61dafb' },
  { name: 'GSAP 3', color: '#88ce02' },
  { name: 'Framer Motion', color: '#ff4154' },
  { name: 'Tailwind 4', color: '#38bdf8' },
  { name: 'Zustand', color: '#f59e0b' },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Home() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.3, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.3, ease: 'power3.out' });
    const onMove = (e) => { xTo(e.clientX); yTo(e.clientY); };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Custom cursor */}
      <div ref={cursorRef} className="pointer-events-none fixed left-0 top-0 z-50 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm md:block" aria-hidden="true" />

      {/* Background gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(8,145,178,0.12) 0%, transparent 70%)' }} />

      {/* ── HERO ── */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl">
          <motion.span variants={fadeUp} className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-white/50 uppercase backdrop-blur-sm">
            Open Creative Lab · Creative Frontend Engineering
          </motion.span>

          <motion.h1 variants={fadeUp} className="mb-6 text-6xl font-black leading-none tracking-tight text-white sm:text-8xl lg:text-9xl" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            mix<span style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>vol</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-white/55">
            고품질 인터랙션 & 애니메이션 레퍼런스 구현체.<br />
            GSAP · Framer Motion · Next.js App Router의 프로덕션 통합 청사진.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <Link href="/lab" className="rounded-full px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90" style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', boxShadow: '0 0 30px rgba(124,58,237,0.35)' }}>
              실험실 탐색하기 →
            </Link>
            <a href="https://github.com" className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition hover:border-white/30">
              GitHub에서 보기
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-10 flex flex-col items-center gap-2 text-white/25">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-px animate-pulse bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="px-6 py-16">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mx-auto max-w-4xl text-center">
          <motion.p variants={fadeUp} className="mb-6 text-xs font-medium tracking-widest text-white/30 uppercase">Tech Stack</motion.p>
          <motion.div variants={stagger} className="flex flex-wrap justify-center gap-3">
            {stackBadges.map((b) => (
              <motion.span key={b.name} variants={fadeUp} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-sm" style={{ color: b.color }}>
                {b.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── EXPERIMENTS GRID ── */}
      <section className="px-6 py-20" id="experiments">
        <div className="mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mb-12 text-center">
            <motion.p variants={fadeUp} className="mb-3 text-xs font-medium tracking-widest text-white/30 uppercase">Interactive Experiments</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white sm:text-4xl">실험실 미리보기</motion.h2>
          </motion.div>

          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {labCards.map((card) => (
              <motion.li key={card.id} variants={fadeUp}>
                <Link href={card.wip ? '#' : card.href} className={`group relative flex h-52 flex-col justify-between overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br p-6 transition-all duration-300 hover:border-white/20 ${card.gradient} ${card.wip ? 'opacity-40 pointer-events-none' : ''}`}>
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-medium text-white/40">{card.category}</span>
                    <span className="rounded-full border px-2.5 py-0.5 text-[10px] font-semibold" style={{ borderColor: card.accent + '44', color: card.accent }}>{card.tag}</span>
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-white">{card.title}</h3>
                    <p className="text-xs leading-relaxed text-white/45">{card.desc}</p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl" style={{ background: `radial-gradient(circle at 50% 120%, ${card.accent}22 0%, transparent 60%)` }} aria-hidden="true" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <motion.p variants={fadeUp} className="mb-3 text-center text-xs font-medium tracking-widest text-white/30 uppercase">Roadmap</motion.p>
            <motion.h2 variants={fadeUp} className="mb-10 text-center text-3xl font-bold text-white">앞으로의 계획</motion.h2>
            <motion.ol variants={stagger} className="space-y-4">
              {[
                { phase: 'Phase 1', label: '현재', color: 'bg-violet-500/20 text-violet-300', dot: 'bg-violet-400', items: ['GSAP ScrollTrigger 기본 데모', '마그네틱 버튼 커스텀 훅 (useMagnet)', 'Framer Motion layoutId 카드 확장', '페이지 전환 오버레이 (Zustand + GSAP)'] },
                { phase: 'Phase 2', label: '진행 중', color: 'bg-cyan-500/20 text-cyan-300', dot: 'bg-cyan-400', items: ['스크롤 기반 유체 물리 인터랙션', '3D 카드 틸팅 커스텀 훅', 'WebGL 배경 파티클'] },
                { phase: 'Phase 3', label: '계획', color: 'bg-white/10 text-white/40', dot: 'bg-white/20', items: ['NPM 패키지 추출 (useMagnet 등)', '인터랙션 문서 사이트', 'CodeSandbox 임베드 지원'] },
              ].map((step, i) => (
                <motion.li key={i} variants={fadeUp} className="rounded-2xl border border-white/8 bg-white/3 p-5 backdrop-blur-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs font-bold text-white/30">{step.phase}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${step.color}`}>{step.label}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {step.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-white/55">
                        <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${step.dot}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="px-6 py-24 text-center">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
          <motion.h2 variants={fadeUp} className="mb-4 text-4xl font-black text-white">함께 실험해봐요</motion.h2>
          <motion.p variants={fadeUp} className="mb-8 text-white/40">클론하고, 분석하고, 더 좋은 인터랙션을 만들어 보세요.</motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/lab" className="rounded-full px-8 py-4 text-sm font-bold text-white transition hover:opacity-90" style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', boxShadow: '0 0 40px rgba(124,58,237,0.3)' }}>
              Lab 입장하기
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
