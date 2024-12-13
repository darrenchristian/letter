import './globals.css'
import { Inter, Pacifico } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const pacifico = Pacifico({ weight: '400', subsets: ['latin'], variable: '--font-pacifico' })

export const metadata = {
  title: 'Love Letter',
  description: 'A special message for someone special',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pacifico.variable} font-sans`}>{children}</body>
    </html>
  )
}

