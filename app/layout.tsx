import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroller from './utils/smoothScroll'

import Navbar from './components/Layout/Navbar';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SAM DAMASHEK | LOS ANGELES PHOTOGRAPHER',
  description: 'LOS ANGELES PHOTOGRAPHER',
  icons: "/favicon.svg"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className=''>
      <body>
      <Navbar />
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  )
}
