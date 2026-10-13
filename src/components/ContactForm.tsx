import { useState } from 'react'

type ContactFormValues = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type ContactFormErrors = {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

const ContactForm = () => {
const [values, setValues] = useState<ContactFormValues>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const [errors, setErrors] = useState<ContactFormErrors>({})

const validateForm = () => {
  const newErrors: ContactFormErrors = {}

  if (!values.name.trim()) {
    newErrors.name = 'Name is required'
  }

  if (!values.email.trim()) {
    newErrors.email = 'Email is required'
  }

  if (!values.phone.trim()) {
    newErrors.phone = 'Phone is required'
  }

  if (!values.subject.trim()) {
    newErrors.subject = 'Subject is required'
  }

  if (!values.message.trim()) {
    newErrors.message = 'Message is required'
  }

  return newErrors
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

const newErrors = validateForm()
  setErrors(newErrors)
}

  return (

<form onSubmit={handleSubmit}>
  <label htmlFor="name">Name</label>
    <input
    id="name"
    type="text"
    placeholder={errors.name || 'Enter your name..'}
    value={values.name}
    onChange={e => setValues({ ...values, name: e.target.value })}
/>
  <label htmlFor="email">Email</label>
    <input
    id="email"
    type="email"
    placeholder={errors.email || '..and your email'}
    value={values.email}
    onChange={e => setValues({ ...values, email: e.target.value })}
/>
  <label htmlFor="message">Message</label>
    <textarea
    id="message"
    placeholder={errors.message || 'Whats on your mind?'}
    value={values.message}
    onChange={e => setValues({ ...values, message: e.target.value })}
/>
    <button type="submit">Send</button>
</form>
  )
}

export default ContactForm