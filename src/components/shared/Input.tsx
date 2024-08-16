import { useState } from 'react'
import IconButton from './IconButton'
import ClickableDiv from './ClickableDiv'
import EyeIcon from '@/assets/icons/eye.svg'
import HiddenEyeIcon from '@/assets/icons/hidden_eye.svg'

type Props = {
  label: string
  id: string
  type: string
  name: string
  endIcon?: React.ReactNode
  isPassword?: boolean
  onForgotPasswordClick?: () => void
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({
  label,
  id,
  type,
  endIcon,
  isPassword,
  onForgotPasswordClick,
  ...rest
}: Props) {
  const [passwordShown, setPasswordShown] = useState(false)

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

  const inputType = passwordShown ? 'text' : type

  return (
    <div className='flex flex-col gap-2.5 relative'>
      <div className='flex justify-between items-center'>
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
        className='w-full bg-transparent text-white p-2 border border-default-border rounded-lg outline-none placeholder:text-sm focus:ring-2 focus:ring-blue-500'
        {...rest}
      />
      {(endIcon || isPassword) && (
        <div className='absolute right-3 bottom-2.5'>{getEndIcon()}</div>
      )}
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
