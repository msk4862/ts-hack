import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ModalRegistery } from '@/hooks/useAuthModal'
import { useModal } from '@/contexts/ModalContext'
import CrossIcon from '@/assets/icons/cross.svg'
import IconButton from './IconButton'

function Modal() {
  const { isOpen, closeModal, content } = useModal()

  // Prevent scrolling when modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  if (!isOpen || !content) return null

  const { type, props } = content
  const Component = ModalRegistery[type]

  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='w-[80%] md:w-1/2 lg:w-1/4 shadow-md relative animate-reveal'>
        <IconButton
          className='absolute top-7 right-4 text-white'
          onClick={closeModal}
          aria-label='Close modal'
        >
          <div className='flex justify-center items-center w-8 h-8 bg-primary rounded-full'>
            <img src={CrossIcon} alt='close' />
          </div>
        </IconButton>
        <Component {...props} />
      </div>
    </div>,
    document.getElementById('modal-root') as Element
  )
}

export default Modal
