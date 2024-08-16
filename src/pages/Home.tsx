import { CreatePost, PostList } from '@/components/Post'
import Modal from '@shared/Modal'

function Home() {
  return (
    <div className='w-[90%] md:w-2/3 lg:w-[40%]'>
      <h1 className='text-2xl mb-2'>Hello Jane</h1>
      <p className='mb-6 w-2/3'>
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>
      <CreatePost />
      <PostList />
      <Modal />
    </div>
  )
}

export default Home
