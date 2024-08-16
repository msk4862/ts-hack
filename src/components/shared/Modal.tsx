import ReactDOM from 'react-dom'
import IconButton from './IconButton'
import { useModal } from '@/contexts/ModalContext'
import { ModalRegistery } from '@/hooks/useAuthModal'
import CrossIcon from '@/assets/icons/cross.svg'

function Modal() {
  const { isOpen, closeModal, content } = useModal()

  if (!isOpen || !content) return null

  const { type, props } = content
  const Component = ModalRegistery[type]

  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='w-1/4 shadow-md relative animate-reveal'>
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
