import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

interface RootLayoutProps {
 children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-slate-50">
          {children}
        </main>
      </body>
    </html>
  )
}

export const metadata = {
  icons: {
    icon: '/icon.ico',
  },
}