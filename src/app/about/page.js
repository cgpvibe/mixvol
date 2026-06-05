// src/app/about/page.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const reasons = [
  {
    num: '01',
    title: '현대적 프레임워크 통합의 실전 청사진',
    accent: '#7c3aed',
    body: '수많은 오픈소스 애니메이션 예제들은 과거 버전에 머물러 있거나 독립된 샌드박스(CodePen 등)에 파편화되어 있습니다. mixvol은 복잡한 GSAP 타임라인과 Framer Motion의 레이아웃 애니메이션을 최신 Next.js(App Router) 프로덕션 환경에서 성능 저하 없이 안전하게 통합하는 방법을 실전 코드로 증명합니다.',
    tags: ['Hydration 안전', 'CLS 방지', 'RSC 최적화'],
  },
  {
    num: '02',
    title: '\'오픈 실험실\' 구조를 통한 커뮤니티 기여',
    accent: '#0891b2',
    body: '이 리포지터리는 절대 경로 별칭(@/*)과 깔끔한 아키텍처 표준을 준수하며, 철저히 모듈화되고 재사용 가능한 컴포넌트 중심으로 설계되었습니다. 다른 프론트엔드 개발자들이 Web Vitals 성능을 해치지 않으면서도 60+ FPS의 부드러운 애니메이션을 구현하는 방법을 복사·분석하고 배울 수 있는 가치 있는 오픈소스 저장소가 될 것입니다.',
    tags: ['60+ FPS', 'Atomic 구조', '@/* 절대경로'],
  },
  {
    num: '03',
    title: 'AI 역량을 증명할 최적의 테스트베드',
    accent: '#059669',
    body: 'mixvol은 스크롤 기반 물리 효과, 커스텀 훅, 동적 레이아웃 등 고난도 코드로 가득 찬 정밀한 테스트베드를 제공합니다. AI와의 결합을 통해, 단순한 코딩 보조를 넘어 추상적인 시각적 아이디어를 정교한 인터랙션 로직으로 전환하는 크리에이티브 테크 영역에서의 협업 가능성을 증명합니다.',
    tags: ['Custom Hooks', 'Scroll Physics', 'Creative Tech'],
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen px-6 pt-28 pb-24">
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true" style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 30%, rgba(124,58,237,0.1) 0%, transparent 60%)' }} />

      <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-3xl">
        {/* 브레드크럼 */}
        <motion.div variants={fadeUp} className="mb-3 flex items-center gap-2 text-xs text-white/30">
          <Link href="/" className="hover:text-white/60 transition">Home</Link>
          <span>/</span>
          <span className="text-white/60">About</span>
        </motion.div>

        {/* 헤더 */}
        <motion.div variants={fadeUp} className="mb-12">
          <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-widest text-white/40 uppercase">
            Project Philosophy
          </span>
          <h1 className="mb-4 text-4xl font-black text-white sm:text-5xl">
            mixvol이란 무엇인가
          </h1>
          <p className="text-lg font-light leading-relaxed text-white/50">
            수백만 건의 npm 다운로드를 기록하는 거대한 오픈소스 라이브러리는 아닙니다.<br />
            하지만 <strong className="font-semibold text-white/80">고품질 인터랙션 및 애니메이션 레퍼런스 구현체</strong>로서<br />
            생태계에 확실한 가치를 제공합니다.
          </p>
        </motion.div>

        {/* 3가지 이유 */}
        <motion.ol variants={stagger} className="mb-16 space-y-6">
          {reasons.map((r) => (
            <motion.li key={r.num} variants={fadeUp} className="rounded-3xl border border-white/8 bg-white/3 p-7 backdrop-blur-sm">
              <div className="mb-4 flex items-start gap-4">
                <span className="mt-0.5 text-3xl font-black leading-none" style={{ color: r.accent + '66' }}>{r.num}</span>
                <h2 className="text-lg font-bold leading-snug text-white">{r.title}</h2>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-white/50">{r.body}</p>
              <div className="flex flex-wrap gap-2">
                {r.tags.map((t) => (
                  <span key={t} className="rounded-full border px-3 py-1 text-[10px] font-semibold" style={{ borderColor: r.accent + '33', color: r.accent }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </motion.ol>

        {/* 현재 상태 */}
        <motion.div variants={fadeUp} className="mb-10 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-7">
          <p className="mb-2 text-xs font-bold tracking-widest text-amber-400/60 uppercase">Current Status</p>
          <p className="text-sm leading-relaxed text-white/50">
            mixvol은 현재 활발히 아키텍처를 설계하고 기획하는 단계에 있습니다. 아직 높은 GitHub 스타 수나 다운로드 지표는 없지만, 이 프로젝트의 핵심 가치는 개발자 커뮤니티를 위한 <strong className="text-white/70">고품질 인터랙티브 프레임워크 레퍼런스 라이브러리</strong>로 나아가기 위한 확실한 기술 로드맵에 있습니다.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <Link href="/lab" className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90" style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}>
            실험실 탐색하기 →
          </Link>
          <Link href="/" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white/25">
            홈으로
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
