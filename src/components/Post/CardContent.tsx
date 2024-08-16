type Props = {
  icon: React.ReactNode
  content: string
}

export default function CardContent({ icon, content }: Props) {
  return (
    <div className='flex bg-foreground p-4 gap-4 rounded-lg'>
      <div className='flex justify-center items-center w-12 h-12 bg-secondary rounded-full flex-shrink-0'>
        {icon}
      </div>
      <p className='flex-grow mt-auto mb-auto ml-2'>{content}</p>
    </div>
  )
}
