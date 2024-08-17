import { useNavigate } from 'react-router-dom'
import { useAuthModal } from '@/hooks/useAuthModal'
import useForm from '@/hooks/useForm'
import Button from '@shared/Button'
import Input from '@shared/Input'
import Header from './Header'
import Footer from './Footer'
import FormWrapper from './FormWrapper'
import { REGISTER_FORM_VALIDATION_RULES } from '@/constants'
import { ModalFormProps, RegisterFormValues } from '@/types'

type Props = ModalFormProps

export default function RegisterForm({ isModal }: Props) {
  const navigate = useNavigate()
  const { openLoginModal } = useAuthModal()
  const { values, errors, handleSubmit, handleChange } =
    useForm<RegisterFormValues>({
      initialValues: {
        username: '',
        password: '',
        email: '',
      },
      validationRules: REGISTER_FORM_VALIDATION_RULES,
      onSubmit,
    })

  function onSubmit(formData: RegisterFormValues) {
    // Handle register logic
    console.log('Register', formData)

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
      <form
        className='flex flex-col gap-4 mt-10'
        onSubmit={handleSubmit}
        noValidate
      >
        <Input
          label='Email'
          id='email'
          name='email'
          type='email'
          placeholder='Enter your email'
          value={values.email}
          handleChange={handleChange}
          errorMessage={errors.email}
          required
        />
        <Input
          label='Username'
          id='username'
          name='username'
          autoComplete='username'
          placeholder='Choose a preferred username'
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
          autoComplete='new-password'
          isPassword={true}
          placeholder='Choose a strong password'
          value={values.password}
          handleChange={handleChange}
          errorMessage={errors.password}
          required
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
