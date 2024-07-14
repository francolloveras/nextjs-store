import clsx from 'clsx'
import { MdLanguage, MdSearch, MdShoppingCart } from 'react-icons/md'
import { VscGithubInverted } from 'react-icons/vsc'

const icons = {
  github: <VscGithubInverted />,
  cart: <MdShoppingCart />,
  lang: <MdLanguage />,
  search: <MdSearch />
}

export type IconValues = keyof typeof icons

export interface IconProps {
  icon: IconValues
  className?: string
}

export default function Icon({ icon, className }: IconProps) {
  return <span className={clsx([className])}>{icons[icon]}</span>
}
