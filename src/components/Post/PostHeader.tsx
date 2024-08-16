import HorizontalDotIcon from '@/assets/icons/dots_hor.svg'

type Props = {
  username: string
  profileImg: string
  time: string
  isEdited?: boolean
}

export default function PostHeader({
  username,
  profileImg,
  time,
  isEdited,
}: Props) {
  return (
    <div className='flex justify-between items-center mb-5'>
      <div className='flex gap-4'>
        <img
          src={profileImg}
          alt={`${username} profile`}
          className='w-12 h-12 rounded-full object-cover'
        />
        <div className='flex flex-col gap-1'>
          <h4 className=''>{username}</h4>
          <span>{`${time} ${isEdited ? '• Edited' : ''}`}</span>
        </div>
      </div>
      <img src={HorizontalDotIcon} alt={`${username} post options`} />
    </div>
  )
}
