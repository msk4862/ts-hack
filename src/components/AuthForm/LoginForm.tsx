import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthModal } from '@/hooks/useAuthModal'
import Button from '@shared/Button'
import Input from '@shared/Input'
import Header from './Header'
import Footer from './Footer'
import FormWrapper from './FormWrapper'
import { ModalFormProps } from '@/types'

type Props = ModalFormProps

export default function LoginForm({ isModal }: Props) {
  const navigate = useNavigate()
  const { openRegisterModal } = useAuthModal()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    // Handle login logic

    // Redirect to home page
    navigate('/')
  }

  function handleCtaClick() {
    // Open register modal if LoginForm is opened as Modal
    if (isModal) {
      openRegisterModal()
      return
    }

    // Redirect to register page
    navigate('/register')
  }

  function handleForgotPasswordClick() {
    // Handle forgot password logic
  }

  return (
    <FormWrapper>
      <Header heading='Welcome Back' subheading='Log into your account' />
      <form className='flex flex-col gap-4 mt-10' onSubmit={handleSubmit}>
        <Input
          label='Email or Username'
          id='email'
          name='email'
          type='email'
          placeholder='Enter your email or username'
        />
        <Input
          label='Password'
          id='password'
          name='password'
          type='password'
          autoComplete='current-password'
          isPassword={true}
          onForgotPasswordClick={handleForgotPasswordClick}
          placeholder='Enter your password'
        />
        <Button type='submit' className='mt-1'>
          Login now
        </Button>
      </form>
      <Footer
        cta='Register'
        onCtaClick={handleCtaClick}
        description='Not registered yet?'
      />
    </FormWrapper>
  )
}
