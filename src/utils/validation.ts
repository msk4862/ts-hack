import { REGEX } from '@/constants'
import { FormErrors, ValidationRules, ValidationType } from '../types'

export function validateFields<T extends { [K in keyof T]: string }>({
  values,
  validationRules,
}: {
  values: T
  validationRules: ValidationRules<T>
}) {
  const errors: FormErrors<T> = {}

  for (const field in validationRules) {
    const rules = validationRules[field]
    const value = values[field]

    const error = validateField(value, rules)
    if (error) {
      errors[field] = error
    }
  }

  return errors
}

/**
 * Validates a field value based on the given validations rules.
 *
 * @param value - The value to be validated.
 * @param rules - An array of validation rules to be applied.
 * @returns The error message if the value fails validation, otherwise undefined.
 */
export function validateField(value: string, rules?: ValidationType[]) {
  if (!rules) return
  for (const rule of rules) {
    const error = validateRule(value, rule)
    if (error) return error
  }
}

/**
 * Validates a value based on a given rule.
 *
 * @param value - The value to be validated.
 * @param rule - The validation rule to be applied.
 * @returns `undefined` if the value is valid, otherwise returns the error message specified in the rule.
 */
function validateRule(value: string, rule: ValidationType) {
  switch (rule.type) {
    case 'required':
      return value ? undefined : rule.error
    case 'minLength': {
      return value.length >= rule.value ? undefined : rule.error
    }
    case 'email':
      return REGEX.email.test(value) ? undefined : rule.error
    default:
      return undefined
  }
}
