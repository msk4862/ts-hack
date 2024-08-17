import { useAuthModal } from '@/hooks/useAuthModal'
import ClickableDiv from '@shared/ClickableDiv'
import ChatBubbleIcon from '@/assets/icons/chat_bubble.svg'
import CardContent from './CardContent'
import PostHeader from './PostHeader'

type Props = {
  username: string
  profileImg: string
  time: string
  isEdited?: boolean
  content: string
  icon: React.ReactNode
  commentsCount: number
}

export default function PostItem({
  username,
  profileImg,
  time,
  isEdited,
  icon,
  content,
  commentsCount,
}: Props) {
  const { openModalIfNotAuthenticated } = useAuthModal()

  function handlePostClick() {
    // Open Auth modal if user is not authenticated
    if (openModalIfNotAuthenticated()) return

    // Handle logic to view post
  }

  return (
    <ClickableDiv
      aria-label={`${username} post`}
      onClick={handlePostClick}
      className='card flex flex-col hover:animate-scale-up'
    >
      <PostHeader
        username={username}
        profileImg={profileImg}
        time={time}
        isEdited={isEdited}
      />
      <CardContent content={content} icon={icon} />
      <div className='flex gap-2 mt-3.5 text-sm'>
        <img src={ChatBubbleIcon} alt={`${commentsCount} comments`} />
        {commentsCount} comments
      </div>
    </ClickableDiv>
  )
}
