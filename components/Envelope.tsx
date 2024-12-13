'use client'

import { motion } from 'framer-motion'
import { useEnvelopeAnimation } from '../hooks/useEnvelopeAnimation'

interface EnvelopeProps {
  onOpen: () => void
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const { controls, handleHover, handleHoverEnd } = useEnvelopeAnimation()

  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
      onClick={onOpen}
    >
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        <motion.path
          d="M0,0 L400,0 L400,300 L0,300 Z"
          fill="#f9d5e5"
          stroke="#ff85a2"
          strokeWidth="8"
        />
        <motion.path
          d="M0,0 L200,150 L400,0"
          fill="none"
          stroke="#ff85a2"
          strokeWidth="8"
          initial={{ pathLength: 0 }}
          animate={controls}
        />
        <motion.path
          d="M0,300 L200,150 L400,300"
          fill="#ff85a2"
          initial={{ opacity: 0 }}
          animate={controls}
        />
      </svg>
    </motion.div>
  )
}

