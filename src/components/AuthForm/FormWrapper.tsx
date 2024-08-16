type Props = {
  children: React.ReactNode
}

export default function FormWrapper({ children }: Props) {
  return (
    <div className='bg-gradient-to-br from-gray-2 to-gray-3 rounded-lg flex flex-col w-full p-0.5'>
      <div className='bg-secondary rounded-lg py-6 px-5 w-full'>{children}</div>
    </div>
  )
}
