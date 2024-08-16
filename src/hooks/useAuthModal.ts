import { LoginForm, RegisterForm } from '@/components/AuthForm'
import { useAuth } from '@/contexts/AuthContext'
import { useModal } from '@/contexts/ModalContext'
import { MODAL_TYPES } from '@/constants'
import { ModalTypes } from '@/types'

export const ModalRegistery = {
  login: LoginForm,
  register: RegisterForm,
}

/**
 * Hook to trigger the login and register modals from anywhere in the app
 */
export function useAuthModal() {
  const { openModal } = useModal()
  const { isAuthenticated } = useAuth()

  /**
   * Opens the authentication modal if the user is not authenticated
   * @param type - The type of modal to open.
   * @returns `true` if the modal was opened, `false` otherwise.
   */
  function openModalIfNotAuthenticated(type?: ModalTypes): boolean {
    if (!isAuthenticated) {
      openRequestedModal(type)
      return true
    }
    return false
  }

  function openRegisterModal() {
    openRequestedModal(MODAL_TYPES.register)
  }

  function openLoginModal() {
    openRequestedModal(MODAL_TYPES.login)
  }

  /**
   * Opens the requested modal
   * @param type - The type of modal to open. Defaults to 'register'.
   */
  function openRequestedModal(type: ModalTypes = MODAL_TYPES.register) {
    openModal({ type, props: { isModal: true } })
  }

  return { openModalIfNotAuthenticated, openLoginModal, openRegisterModal }
}
