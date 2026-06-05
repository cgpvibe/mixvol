# mixvol

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square)](https://gsap.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF4154?style=flat-square)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-white?style=flat-square)](LICENSE)

> **고품질 인터랙션 & 애니메이션 레퍼런스 구현체** — GSAP · Framer Motion · Next.js App Router 프로덕션 통합 청사진.

---

## 📌 프로젝트 소개

`mixvol`은 수백만 건의 npm 다운로드를 기록하는 거대한 오픈소스 라이브러리는 아닙니다. 하지만 **"고품질 인터랙션 및 애니메이션 레퍼런스 구현체"**로서 생태계에 확실한 가치를 제공합니다.

수많은 오픈소스 애니메이션 예제들은 과거 버전에 머물러 있거나 독립된 샌드박스(CodePen 등)에 파편화되어 있습니다. `mixvol`은 **복잡한 GSAP 타임라인과 Framer Motion의 레이아웃 애니메이션을 최신 Next.js(App Router) 프로덕션 환경에서 성능 저하 없이 안전하게 통합하는 방법**을 실전 코드로 증명합니다.

- **하이드레이션 오류** 방지 패턴
- **레이아웃 시프트(CLS)** 제거 기법
- **React 서버 컴포넌트(RSC)** 최적화와의 공존 전략

---

## 🛠️ 기술 스택

| 영역 | 기술 | 역할 |
|------|------|------|
| Framework | Next.js 15 (App Router) | 라우팅, RSC, 성능 최적화 |
| UI | React 19 | 컴포넌트 기반 아키텍처 |
| 애니메이션 | GSAP 3 + ScrollTrigger | 타임라인, 스크롤 기반 물리 효과 |
| 레이아웃 애니메이션 | Framer Motion 12 | layoutId 공유, AnimatePresence |
| 스타일링 | Tailwind CSS 4 | 유틸리티 퍼스트, 커스텀 CSS 변수 |
| 상태 관리 | Zustand 5 | 페이지 전환 오버레이 전역 상태 |
| 폰트 | Pretendard | 한국어 최적화 가변 폰트 |

---

## ✨ 실험 목록

| ID | 실험명 | 기술 | 설명 |
|----|--------|------|------|
| `scroll-trigger` | ScrollTrigger Pin & Reveal | GSAP | 스크롤 연동 요소 고정 및 순차 등장 |
| `text-reveal` | Text Word Reveal | GSAP + ScrollTrigger | 단어 단위 분해 + perspective 3D 등장 |
| `layout-expand` | Layout Expand | Framer Motion | layoutId 공유 카드→전체화면 트랜지션 |
| `magnetic` | Magnetic Button | GSAP + Custom Hook | quickTo 기반 마우스 근접 자석 인터랙션 |
| `page-transition` | Page Transition | GSAP + Zustand | 전역 페이지 전환 오버레이 시스템 |
| `physics-scroll` | Physics Scroll *(WIP)* | Framer Motion | 스크롤 속도 반응형 유체 물리 |

---

## 🗂️ 디렉토리 구조

```
mixvol/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.js           # 루트 레이아웃 (폰트, 메타데이터, 전환 오버레이)
│   │   ├── page.js             # 홈페이지 (히어로 + 실험 카드 그리드)
│   │   ├── lab/
│   │   │   └── page.js         # 실험 인덱스 (탭 기반 인터랙티브 데모)
│   │   ├── about/
│   │   │   └── page.js         # 프로젝트 철학 & 소개
│   │   └── study/
│   │       └── gsap/
│   │           └── scrolltrigger/
│   │               └── 1/page.js  # ScrollTrigger 기본 데모
│   ├── components/
│   │   ├── hooks/
│   │   │   └── useMagnet.js    # 🔧 GSAP quickTo 기반 마그네틱 커스텀 훅
│   │   ├── experiments/
│   │   │   ├── MagneticButton.js    # 마그네틱 버튼 컴포넌트
│   │   │   ├── ScrollTextReveal.js  # 스크롤 텍스트 reveal 컴포넌트
│   │   │   └── LayoutExpand.js      # layoutId 카드 확장 컴포넌트
│   │   ├── Header.js           # 고정 헤더 (mix-blend-difference)
│   │   ├── Menu.js             # 전환 인식 네비게이션 메뉴
│   │   ├── Logo.js             # SVG 로고
│   │   ├── PageTransition.js   # GSAP + Zustand 페이지 전환 오버레이
│   │   └── SmoothScroll.js     # GSAP ScrollSmoother 래퍼
│   ├── data/
│   │   └── menuData.js         # 메뉴 항목 데이터
│   ├── store/
│   │   └── transition.js       # Zustand 전환 상태 스토어
│   └── lib/
│       └── utils.js            # 유틸리티 함수 (cn 등)
├── public/
│   └── fonts/                  # Pretendard 서브셋 woff2
├── jsconfig.json               # @/* 절대경로 별칭
└── next.config.mjs
```

---

## 🚀 시작하기

```bash
# 1. 저장소 클론
git clone https://github.com/your-username/mixvol.git
cd mixvol

# 2. 의존성 설치
yarn install

# 3. 개발 서버 시작
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어보세요.

---

## 🔧 커스텀 훅 사용법

### `useMagnet`

```js
import { useMagnet } from '@/components/hooks/useMagnet';

const { ref, onMouseMove, onMouseLeave } = useMagnet({
  strength: 0.35,  // 당김 강도 (0~1)
  radius: 90,      // 감지 반경 (px)
});

<button
  ref={ref}
  onMouseMove={onMouseMove}
  onMouseLeave={onMouseLeave}
  style={{ willChange: 'transform' }}
>
  Magnetic
</button>
```

### `ScrollTextReveal`

```jsx
import ScrollTextReveal from '@/components/experiments/ScrollTextReveal';

<ScrollTextReveal
  text="스크롤에 반응하는 단어 단위 텍스트 애니메이션"
  tag="h2"
  stagger={0.06}
/>
```

---

## 🗺️ 로드맵

- [x] **Phase 1** — 핵심 실험 구현 (ScrollTrigger, Magnetic, LayoutExpand, PageTransition)
- [ ] **Phase 2** — 스크롤 기반 유체 물리, 3D 카드 틸팅, WebGL 파티클
- [ ] **Phase 3** — NPM 패키지 추출, 문서 사이트, CodeSandbox 임베드

---

## 🤝 기여하기

이 저장소는 오픈 크리에이티브 실험실입니다. 모든 종류의 기여를 환영합니다.

1. Fork → `feat/your-experiment` 브랜치 생성
2. 실험 컴포넌트를 `src/components/experiments/` 에 추가
3. `src/app/lab/page.js` 에 탭 항목 추가
4. Pull Request 제출

---

## 📄 라이선스

[MIT](LICENSE) © mixvol contributors
