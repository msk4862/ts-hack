import { useState } from 'react'
import { validateField, validateFields } from '@/utils/validation'
import { convertToKey, FormErrors, ValidationRules } from '@/types'

type userFormProps<T> = {
  initialValues: T
  validationRules: ValidationRules<T>
  onSubmit: (formData: T) => void
}

export default function useForm<T extends { [K in keyof T]: string }>({
  initialValues,
  validationRules,
  onSubmit,
}: userFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<FormErrors<T>>({})

  function handleChange(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }))

    const fieldName = convertToKey<T>(name)
    // Validate field on change
    const error = validateField(value, validationRules[fieldName])
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    // Validate form fields
    const errors = validateFields<T>({ values, validationRules })
    // If there are errors, set them and return
    if (Object.keys(errors).length) {
      setErrors(errors)
      return
    }

    onSubmit(values)
  }

  return { values, errors, handleChange, handleSubmit }
}
