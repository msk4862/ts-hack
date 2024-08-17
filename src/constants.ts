import { LoginFormValues, RegisterFormValues, ValidationRules } from '@/types'

export const REGEX = {
  email: /\S+@\S+\.\S+/,
}

export const LOGIN_FORM_VALIDATION_RULES: ValidationRules<LoginFormValues> = {
  username: [
    {
      type: 'required',
      error: 'Username is required',
    },
    {
      type: 'minLength',
      value: 6,
      error: 'Username must be at least 6 characters long',
    },
  ],
  password: [
    {
      type: 'required',
      error: 'Password is required',
    },
  ],
}

export const REGISTER_FORM_VALIDATION_RULES: ValidationRules<RegisterFormValues> =
  {
    ...LOGIN_FORM_VALIDATION_RULES,
    email: [
      {
        type: 'required',
        error: 'Email is required',
      },
      {
        type: 'email',
        error: 'Email is invalid',
      },
    ],
  }

export const MODAL_TYPES = {
  login: 'login',
  register: 'register',
} as const
