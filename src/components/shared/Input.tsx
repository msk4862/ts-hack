import { useState } from 'react'
import clsx from 'clsx'
import EyeIcon from '@/assets/icons/eye.svg'
import HiddenEyeIcon from '@/assets/icons/hidden_eye.svg'
import IconButton from './IconButton'
import ClickableDiv from './ClickableDiv'

type Props = {
  label: string
  id: string
  name: string
  endIcon?: React.ReactNode
  isPassword?: boolean
  onForgotPasswordClick?: () => void
  errorMessage?: string
  handleChange: (name: string, value: string) => void
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({
  label,
  id,
  name,
  type = 'text',
  endIcon,
  isPassword,
  onForgotPasswordClick,
  errorMessage,
  handleChange,
  ...rest
}: Props) {
  const [passwordShown, setPasswordShown] = useState(false)
  const errorState = Boolean(errorMessage)
  const inputType = passwordShown ? 'text' : type

  function togglePassword() {
    setPasswordShown((prev) => !prev)
  }

  function getEndIcon() {
    if (isPassword) {
      return (
        <PasswordToggle
          togglePassword={togglePassword}
          passwordShown={passwordShown}
        />
      )
    }
    return <>{endIcon}</>
  }

  return (
    <div className='flex flex-col relative'>
      <div className='flex justify-between items-center mb-2.5'>
        <label htmlFor={id} className='text-heading text-sm'>
          {label}
        </label>
        {isPassword && onForgotPasswordClick && (
          <ForgotPasswordCta handleClick={onForgotPasswordClick} />
        )}
      </div>
      <input
        id={id}
        type={inputType}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(name, event.target.value)
        }
        className={clsx(
          'w-full bg-transparent text-white p-2 border border-default-border rounded-lg outline-none placeholder:text-sm focus:ring-2 focus:ring-blue-500',
          {
            'invalid:border-red-400': errorState,
          }
        )}
        {...rest}
      />
      {(endIcon || isPassword) && (
        <div
          className={`absolute right-3 bottom-3 ${errorState ? 'bottom-7' : 'bottom-3'}`}
        >
          {getEndIcon()}
        </div>
      )}
      <span aria-live='assertive' className='text-xs text-red-400'>
        {errorMessage ? errorMessage : ' '}
      </span>
    </div>
  )
}

type PasswordToggleProps = {
  togglePassword: () => void
  passwordShown: boolean
}

function PasswordToggle({
  togglePassword,
  passwordShown,
}: PasswordToggleProps) {
  return (
    <IconButton
      onClick={togglePassword}
      aria-label={`${passwordShown ? 'Hide' : 'Show'} password`}
    >
      <img
        src={passwordShown ? HiddenEyeIcon : EyeIcon}
        alt='Toggle password visibility'
      />
    </IconButton>
  )
}

type ForgotPasswordCtaProps = {
  handleClick: () => void
}

function ForgotPasswordCta({ handleClick }: ForgotPasswordCtaProps) {
  return (
    <ClickableDiv
      onClick={handleClick}
      aria-label='Forgot password'
      className='text-heading text-xs'
    >
      Forgot password?
    </ClickableDiv>
  )
}
