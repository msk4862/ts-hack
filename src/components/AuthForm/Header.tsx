import clsx from 'clsx'

type Props = {
  heading: string
  subheading: string
  className?: string
}

export default function Header({ heading, subheading, className }: Props) {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center gap-2',
        className
      )}
    >
      <p className='text-gray-1 text-sm tracking-widest uppercase'>{heading}</p>
      <h2 className='text-white text-xl'>{subheading}</h2>
    </div>
  )
}
