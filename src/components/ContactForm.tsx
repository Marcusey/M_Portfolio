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
const [isSent, setIsSent] = useState(false)

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
  setIsSent(false)

  const newErrors = validateForm()
  setErrors(newErrors)

  if (Object.keys(newErrors).length === 0) {
    setIsSent(true)
    setValues({ name: '', email: '', phone: '', subject: '', message: '' })
  }
}

  return (

<form onSubmit={handleSubmit} noValidate>
  <label htmlFor="name">Name</label>
    <input
    id="name"
    type="text"
    placeholder="Enter your name.."
    value={values.name}
    onChange={e => setValues({ ...values, name: e.target.value })}
/>
    {errors.name && <p>{errors.name}</p>}

  <label htmlFor="email">Email</label>
    <input
    id="email"
    type="email"
    placeholder="..and your email"
    value={values.email}
    onChange={e => setValues({ ...values, email: e.target.value })}
 />
    {errors.email && <p>{errors.email}</p>}

  <label htmlFor="phone">Phone</label>
    <input
    id="phone"
    type="tel"
    value={values.phone}
    onChange={e => setValues({ ...values, phone: e.target.value })}
 />
    {errors.phone && <p>{errors.phone}</p>}    

  <label htmlFor="subject">Subject</label>
    <input
    id="subject"
    type="text"
    value={values.subject}
    onChange={e => setValues({ ...values, subject: e.target.value })}
/>
    {errors.subject && <p>{errors.subject}</p>}

  <label htmlFor="message">Message</label>
    <textarea
    id="message"
    placeholder="Whats on your mind?"
    value={values.message}
    onChange={e => setValues({ ...values, message: e.target.value })}
/>
    {errors.message && <p>{errors.message}</p>}

    {isSent && <p>Your message has been sent!</p>}

    <button type="submit">Send</button>
</form>
  )
}

export default ContactForm