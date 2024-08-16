import { ModalRegistery } from '@/hooks/useAuthModal'

export type ModalTypes = keyof typeof ModalRegistery

export type ModalFormProps = {
  isModal?: boolean
}
