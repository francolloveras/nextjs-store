import clsx from 'clsx'
import { FaExternalLinkAlt } from 'react-icons/fa'
import {
  MdAdd,
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdLanguage,
  MdPlayCircle,
  MdSearch,
  MdShoppingCart,
  MdThumbUp
} from 'react-icons/md'
import { VscGithubInverted } from 'react-icons/vsc'

const icons = {
  github: <VscGithubInverted />,
  cart: <MdShoppingCart />,
  lang: <MdLanguage />,
  search: <MdSearch />,
  arrowForward: <MdArrowForwardIos />,
  arrowBack: <MdArrowBackIosNew />,
  play: <MdPlayCircle />,
  add: <MdAdd />,
  like: <MdThumbUp />,
  externalLink: <FaExternalLinkAlt />
}

export type IconValues = keyof typeof icons

export interface IconProps {
  icon: IconValues
  className?: string
}

export default function Icon({ icon, className }: IconProps) {
  return <span className={clsx([className])}>{icons[icon]}</span>
}
