import { ModalRegistery } from '@/hooks/useAuthModal'

export type ModalTypes = keyof typeof ModalRegistery

export type ModalFormProps = {
  isModal?: boolean
}

export type LoginFormValues = {
  username: string
  password: string
}

export type RegisterFormValues = LoginFormValues & {
  email: string
}

export type ValidationType =
  | { type: 'required'; error: string }
  | { type: 'minLength'; value: number; error: string }
  | { type: 'email'; error: string }

export type ValidationRules<T> = Partial<{
  [K in keyof T]: ValidationType[]
}>

export type FormErrors<T> = { [K in keyof T]?: string }

// Converts the input string, number, or symbol to a key of type T.
export function convertToKey<T>(inputString: string | number | symbol) {
  return inputString as keyof T
}
