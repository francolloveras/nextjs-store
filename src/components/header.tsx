import Link from 'next/link'

import Nav from '@/components/nav'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 md:mx-auto md:w-3/4">
      <Link
        href="/"
        className="text-2xl font-semibold tracking-wide text-neutral-200 hover:text-white md:text-3xl"
      >
        NextJS Store
      </Link>
      <Nav />
    </header>
  )
}
