import './globals.css'

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
  title: 'Nextjs Store by Franco Lloveras',
  description: 'A simple store created using Next.js and Steam API services.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
