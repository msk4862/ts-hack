import { useNavigate } from 'react-router-dom'
import { useAuthModal } from '@/hooks/useAuthModal'
import useForm from '@/hooks/useForm'
import Button from '@shared/Button'
import Input from '@shared/Input'
import Header from './Header'
import Footer from './Footer'
import FormWrapper from './FormWrapper'
import { LOGIN_FORM_VALIDATION_RULES } from '@/constants'
import { LoginFormValues, ModalFormProps } from '@/types'

type Props = ModalFormProps

export default function LoginForm({ isModal }: Props) {
  const navigate = useNavigate()
  const { openRegisterModal } = useAuthModal()
  const { values, errors, handleSubmit, handleChange } =
    useForm<LoginFormValues>({
      initialValues: {
        username: '',
        password: '',
      },
      validationRules: LOGIN_FORM_VALIDATION_RULES,
      onSubmit,
    })

  function onSubmit(formData: LoginFormValues) {
    // Handle login logic
    console.log('Login', formData)

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
      <form
        className='flex flex-col gap-4 mt-10'
        onSubmit={handleSubmit}
        noValidate
      >
        <Input
          label='Email or Username'
          id='username'
          name='username'
          placeholder='Enter your email or username'
          value={values.username}
          handleChange={handleChange}
          errorMessage={errors.username}
          required
        />
        <Input
          label='Password'
          id='password'
          name='password'
          type='password'
          autoComplete='current-password'
          isPassword
          value={values.password}
          handleChange={handleChange}
          errorMessage={errors.password}
          onForgotPasswordClick={handleForgotPasswordClick}
          placeholder='Enter your password'
          required
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
