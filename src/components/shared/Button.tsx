import clsx from 'clsx'

type Props = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  className,
  onClick,
  type = 'button',
}: Props) {
  return (
    <button
      type={type}
      className={clsx(
        'bg-blue-1 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
