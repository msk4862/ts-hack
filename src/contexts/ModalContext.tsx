import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
} from 'react'
import { ModalFormProps, ModalTypes } from '@/types'

export type ModalContent = {
  type: ModalTypes
  props?: ModalFormProps
}
type ModalContextProps = {
  isOpen: boolean
  openModal: (content: ModalContent) => void
  closeModal: () => void
  content: ModalContent | null
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<ModalContextProps['content']>(null)

  const openModal = useCallback(
    ({ type, props = {} }: ModalContent) => {
      setContent({ type, props })
      setIsOpen(true)
    },
    [setContent, setIsOpen]
  )

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setContent(null)
  }, [setContent, setIsOpen])

  const context = useMemo(
    () => ({ isOpen, openModal, closeModal, content }),
    [isOpen, content, openModal, closeModal]
  )

  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
