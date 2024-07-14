import Link from 'next/link'

import Nav from '@/components/nav'

export default function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between py-4">
      <Link href="/" className="text-2xl font-semibold uppercase tracking-wider">
        NextJS Store
      </Link>
      <Nav />
    </header>
  )
}
