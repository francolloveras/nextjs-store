import clsx from 'clsx'

import Icon, { IconProps, IconValues } from '@/ui/icon'

interface TypographyProps extends Omit<React.HTMLProps<HTMLElement>, 'as'> {
  as: React.ElementType
  icon?: IconValues | IconProps
  children: string | number | React.ReactElement
}

export default function Typography({ as: Tag, icon, children, ...rest }: TypographyProps) {
  const iconProps = icon ? (typeof icon === 'string' ? { icon } : { ...icon }) : undefined

  return (
    <Tag
      {...rest}
      className={clsx(
        {
          'inline-flex align-middle mb-px items-center gap-x-1': icon
        },
        [rest.className]
      )}
    >
      {iconProps && <Icon {...iconProps} />}
      {children}
    </Tag>
  )
}
