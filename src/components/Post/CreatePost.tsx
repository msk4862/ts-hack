import { useAuthModal } from '@/hooks/useAuthModal'
import Button from '@shared/Button'
import ClickableDiv from '@shared/ClickableDiv'
import CardContent from './CardContent'

export default function CreatePost() {
  const { openModalIfNotAuthenticated } = useAuthModal()

  function handlePostInput() {
    // Open Auth modal if user is not authenticated
    if (openModalIfNotAuthenticated()) {
      return
    }
    // Handle Post input logic
  }

  function handlePost() {
    // Open Auth modal if user is not authenticated
    if (openModalIfNotAuthenticated()) {
      return
    }
    // Handle Post publish logic
  }

  return (
    <div className='card flex flex-col gap-4'>
      <h2 className='text-xl'>Create Post</h2>
      <ClickableDiv aria-label='Create post' onClick={handlePostInput}>
        <CardContent icon='💬' content='How are you feeling today?' />
      </ClickableDiv>
      <div className='w-1/6 self-end'>
        <Button onClick={handlePost}>Post</Button>
      </div>
    </div>
  )
}
