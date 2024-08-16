import PostItem from './PostItem'
import posts from '@/data/posts.json'

export default function PostList() {
  return (
    <div className='flex flex-col gap-4 mt-4'>
      {posts.map((post, index) => {
        const {
          username,
          profileImg,
          time,
          isEdited,
          content,
          icon,
          commentsCount,
        } = post
        return (
          <PostItem
            key={index}
            username={username}
            profileImg={profileImg}
            time={time}
            isEdited={isEdited}
            icon={icon}
            content={content}
            commentsCount={commentsCount}
          />
        )
      })}
    </div>
  )
}
