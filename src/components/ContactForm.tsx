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
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name..."
          value={values.name}
          onChange={e => setValues({ ...values, name: e.target.value })}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <p className="form-error">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email..."
          value={values.email}
          onChange={e => setValues({ ...values, email: e.target.value })}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          value={values.phone}
          onChange={e => setValues({ ...values, phone: e.target.value })}
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone && <p className="form-error">{errors.phone}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text"
          value={values.subject}
          onChange={e => setValues({ ...values, subject: e.target.value })}
          aria-invalid={Boolean(errors.subject)}
        />
        {errors.subject && <p className="form-error">{errors.subject}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="What's on your mind?"
          value={values.message}
          onChange={e => setValues({ ...values, message: e.target.value })}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="form-error">{errors.message}</p>}
      </div>

      {isSent && (
        <p role="status">Your message has been sent!</p>
      )}

      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm