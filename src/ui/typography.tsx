import clsx from 'clsx'

import Icon, { IconProps, IconValues } from '@/ui/icon'

interface TypographyProps<T extends React.ElementType> {
  as: T
  icon?: IconValues | IconProps
  variant?: 'transparent-button'
  children?: string | number | React.ReactElement
}

export default function Typography<T extends React.ElementType>({
  as: Tag,
  icon,
  variant,
  children,
  ...rest
}: TypographyProps<T> & Omit<React.ComponentPropsWithRef<T>, keyof TypographyProps<T>>) {
  const iconProps = icon ? (typeof icon === 'string' ? { icon } : { ...icon }) : undefined

  return (
    // @ts-expect-error Error type
    <Tag
      {...rest}
      className={clsx(
        {
          'inline-flex align-middle mb-px items-center gap-x-1': icon,
          'hover:bg-neutral-800 rounded-md text-neutral-400 p-1.5 transition-colors duration-200 hover:text-white':
            variant === 'transparent-button'
        },
        [rest.className]
      )}
    >
      {iconProps && <Icon {...iconProps} />}
      {children}
    </Tag>
  )
}
