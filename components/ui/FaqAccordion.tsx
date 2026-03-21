'use client'
import { useState, useRef, useEffect } from 'react'

interface FaqItem {
  question: string
  answer: string
}

interface Props {
  items: FaqItem[]
}

// Fully CSS-driven accordion — no framer-motion, uses max-height transition instead.
export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  // Force a re-render after mount so heights are measured correctly
  const [, forceUpdate] = useState(0)
  useEffect(() => { forceUpdate(n => n + 1) }, [])

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const contentEl = contentRefs.current[i]
        const contentHeight = contentEl ? contentEl.scrollHeight : 0

        return (
          <div key={i} className="border-t border-[rgba(23,23,32,0.09)] last:border-b last:border-[rgba(23,23,32,0.09)] overflow-hidden">
            <button
              className="flex items-center justify-between gap-4 py-[22px] cursor-pointer text-left font-head text-base font-semibold text-text-1 hover:text-navy transition-colors w-full bg-transparent border-0"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span
                className="w-[22px] h-[22px] rounded-full bg-[rgba(23,23,32,0.04)] border border-[rgba(23,23,32,0.09)] flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                  background: isOpen ? '#0E2050' : undefined,
                  borderColor: isOpen ? '#0E2050' : undefined,
                  color: isOpen ? 'white' : '#6E6A7C',
                }}
                aria-hidden="true"
              >
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <polyline points="2,4 6,8 10,4"/>
                </svg>
              </span>
            </button>
            <div
              ref={el => { contentRefs.current[i] = el }}
              style={{
                maxHeight: isOpen ? `${contentHeight}px` : '0px',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
              }}
            >
              <div className="pb-[22px] text-[15px] text-text-2 leading-[1.72]">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
