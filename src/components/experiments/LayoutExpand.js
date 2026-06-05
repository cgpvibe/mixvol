// src/components/experiments/LayoutExpand.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LayoutExpand
 * Framer Motion의 layoutId를 활용해 카드가 전체화면으로 부드럽게 확장되는
 * 공유 레이아웃 애니메이션 컴포넌트.
 * React 서버 컴포넌트와 호환되도록 'use client'로 분리되어 있습니다.
 */
export default function LayoutExpand({ cards = [] }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* 카드 그리드 */}
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <motion.li
            key={card.id}
            layoutId={`card-${card.id}`}
            onClick={() => setSelected(card)}
            className="cursor-pointer overflow-hidden rounded-2xl"
            style={{ background: card.bg }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            <motion.div className="flex h-40 flex-col justify-end p-5">
              <motion.h3
                layoutId={`title-${card.id}`}
                className="text-sm font-semibold text-white/90"
              >
                {card.title}
              </motion.h3>
            </motion.div>
          </motion.li>
        ))}
      </ul>

      {/* 확장된 카드 오버레이 */}
      <AnimatePresence>
        {selected && (
          <>
            {/* 딤 배경 */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* 확장 카드 */}
            <motion.div
              layoutId={`card-${selected.id}`}
              className="fixed inset-6 z-50 overflow-hidden rounded-3xl md:inset-16"
              style={{ background: selected.bg }}
            >
              <div className="flex h-full flex-col justify-between p-8 md:p-12">
                <button
                  onClick={() => setSelected(null)}
                  className="self-end rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white/30"
                  aria-label="닫기"
                >
                  ✕ 닫기
                </button>
                <div>
                  <motion.h2
                    layoutId={`title-${selected.id}`}
                    className="mb-3 text-3xl font-bold text-white md:text-5xl"
                  >
                    {selected.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-prose text-white/70"
                  >
                    {selected.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
