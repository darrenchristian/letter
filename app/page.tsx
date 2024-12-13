'use client'

import { useState } from 'react'
import Envelope from '../components/Envelope'
import Letter from '../components/Letter'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pink-100 p-4">
      <div className="relative w-full max-w-md">
        {isOpen ? (
          <Letter onClose={() => setIsOpen(false)} />
        ) : (
          <Envelope onOpen={() => setIsOpen(true)} />
        )}
      </div>
    </main>
  )
}

