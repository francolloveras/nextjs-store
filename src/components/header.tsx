import Link from 'next/link'

import Nav from '@/components/nav'

export default function Header() {
  return (
    <header className="flex w-screen items-center justify-between px-96 py-4 transition-colors duration-300 hover:bg-[#121212]/70">
      <Link
        href="/"
        className="text-3xl font-semibold tracking-wide text-neutral-200 hover:text-white"
      >
        NextJS Store
      </Link>
      <Nav />
    </header>
  )
}
