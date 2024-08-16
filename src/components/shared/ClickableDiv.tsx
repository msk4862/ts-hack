import React from 'react'

type Props = {
  children: React.ReactNode
  onClick: () => void
  'aria-label': string
} & React.HTMLProps<HTMLDivElement>

export default function ClickableDiv({
  children,
  'aria-label': ariaLabel,
  onClick,
  ...rest
}: Props): JSX.Element {
  return (
    <div
      tabIndex={0}
      role='button'
      aria-label={ariaLabel}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  )
}
