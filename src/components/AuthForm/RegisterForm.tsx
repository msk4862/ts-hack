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

export default function RegisterForm({ isModal }: Props) {
  const navigate = useNavigate()
  const { openLoginModal } = useAuthModal()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    // Handle register logic

    // Redirect to home page
    navigate('/')
  }

  function handleCtaClick() {
    // Open Login modal if RegisterForm is opened as Modal
    if (isModal) {
      openLoginModal()
      return
    }

    // Redirect to login page
    navigate('/login')
  }

  return (
    <FormWrapper>
      <Header heading='Sign Up' subheading='Create an account to continue' />
      <form className='flex flex-col gap-4 mt-10' onSubmit={handleSubmit}>
        <Input
          label='Email'
          id='email'
          name='email'
          type='email'
          placeholder='Enter your email'
        />
        <Input
          label='Username'
          id='username'
          name='username'
          autoComplete='username'
          type='text'
          placeholder='Choose a preferred username'
        />
        <Input
          label='Password'
          id='password'
          name='password'
          type='password'
          autoComplete='new-password'
          isPassword={true}
          placeholder='Choose a strong password'
        />
        <Button type='submit' className='mt-1'>
          Continue
        </Button>
      </form>
      <Footer
        cta='Login'
        onCtaClick={handleCtaClick}
        description='Already have an account?'
      />
    </FormWrapper>
  )
}
