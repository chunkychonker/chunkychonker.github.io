import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Alert, Button, Form, Spinner } from 'react-bootstrap'

const emailJsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
}

function ContactForm() {
  const formRef = useRef(null)
  const [validated, setValidated] = useState(false)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSending, setIsSending] = useState(false)

  const isConfigured = Object.values(emailJsConfig).every(Boolean)

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    setValidated(true)

    if (!form.checkValidity()) {
      return
    }

    if (!isConfigured) {
      setStatus({
        type: 'danger',
        message:
          'The contact form is not connected yet. Add your EmailJS keys in a local .env file first.',
      })
      return
    }

    setIsSending(true)
    setStatus({ type: 'idle', message: '' })

    try {
      await emailjs.sendForm(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        formRef.current,
        { publicKey: emailJsConfig.publicKey },
      )

      form.reset()
      setValidated(false)
      setStatus({
        type: 'success',
        message: 'Message sent successfully. I will see it in my email inbox.',
      })
    } catch {
      setStatus({
        type: 'danger',
        message:
          'Something went wrong while sending your message. Please try again in a moment.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="contact-form-shell">
      {!isConfigured ? (
        <Alert variant="warning" className="mb-4">
          EmailJS is not configured yet. Add `VITE_EMAILJS_PUBLIC_KEY`,
          `VITE_EMAILJS_SERVICE_ID`, and `VITE_EMAILJS_TEMPLATE_ID` to your local
          environment file before testing submissions.
        </Alert>
      ) : null}

      {status.type !== 'idle' ? (
        <Alert variant={status.type} className="mb-4">
          {status.message}
        </Alert>
      ) : null}

      <Form noValidate validated={validated} ref={formRef} onSubmit={handleSubmit}>
        <input type="hidden" name="to_name" value="Steve Ling" />
        <input type="hidden" name="site_name" value="Steve Ling Personal Site" />

        <Form.Group className="mb-3" controlId="contactName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="user_name"
            placeholder="Your name"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please share your name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="name@example.com"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder="What would you like to talk about?"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please add a short subject.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="contactMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="message"
            placeholder="Write your message here"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please include a message.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="dark" disabled={isSending}>
          {isSending ? (
            <>
              <Spinner animation="border" size="sm" className="me-2" />
              Sending...
            </>
          ) : (
            'Send message'
          )}
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
