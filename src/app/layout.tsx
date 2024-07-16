import './globals.css'

import clsx from 'clsx'
import { Metadata } from 'next'
import { Rubik } from 'next/font/google'

import Footer from '@/components/footer'
import Header from '@/components/header'

const rubik = Rubik({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: {
    default: 'Nextjs Store by Franco Lloveras',
    template: '%s | Nextjs Store by Franco Lloveras'
  },
  description: 'A simple store created using Next.js and Steam API services.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx('flex flex-col gap-y-4 overflow-x-hidden', [rubik.className])}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
