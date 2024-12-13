'use client'

import { motion } from 'framer-motion'
import { HeartPattern, FlowerPattern } from '../utils/patterns'

interface LetterProps {
  onClose: () => void
}

export default function Letter({ onClose }: LetterProps) {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        ×
      </button>
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-6">My Dearest</h1>
      <p className="text-lg text-gray-700 mb-4">
        Your love is the most precious gift I've ever received. Every moment with you feels like a dream come true.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        You bring light to my darkest days and joy to my heart. I'm so grateful to have you in my life.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        I love you more than words can express.
      </p>
      <p className="text-xl font-bold text-right text-pink-500">
        Forever yours,
      </p>
      <p className="text-xl font-bold text-right text-pink-500">
        [Your Name]
      </p>
      <HeartPattern className="absolute top-4 left-4 w-16 h-16 text-pink-200 opacity-50" />
      <FlowerPattern className="absolute bottom-4 right-4 w-16 h-16 text-pink-200 opacity-50" />
    </motion.div>
  )
}

