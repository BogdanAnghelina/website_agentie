'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FaqItem {
  question: string
  answer: string
}

interface Props {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={i} className="border-t border-[rgba(23,23,32,0.09)] last:border-b last:border-[rgba(23,23,32,0.09)] overflow-hidden">
          <button
            className="flex items-center justify-between gap-4 py-[22px] cursor-pointer text-left font-head text-base font-semibold text-text-1 hover:text-navy transition-colors w-full bg-transparent border-0"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <span
              className="w-[22px] h-[22px] rounded-full bg-[rgba(23,23,32,0.04)] border border-[rgba(23,23,32,0.09)] flex items-center justify-center flex-shrink-0 transition-all duration-300"
              style={{
                transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)',
                background: openIndex === i ? '#0E2050' : undefined,
                borderColor: openIndex === i ? '#0E2050' : undefined,
                color: openIndex === i ? 'white' : '#6E6A7C',
              }}
              aria-hidden="true"
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polyline points="2,4 6,8 10,4"/>
              </svg>
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-[22px] text-[15px] text-text-2 leading-[1.72]">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
