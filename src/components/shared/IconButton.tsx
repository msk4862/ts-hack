import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  'aria-label': string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function IconButton({
  children,
  type = 'button',
  'aria-label': ariaLabel,
  className,
  onClick,
  ...rest
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      className={clsx(
        'flex justify-center items-center bg-transparent',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
