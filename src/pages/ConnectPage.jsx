import { Card, Col, Container, Row } from 'react-bootstrap'
import ContactForm from '../components/ContactForm'
import PageIntro from '../components/PageIntro'

function ConnectPage() {
  return (
    <>
      <PageIntro
        badge="Connect"
        title="Reach out if you want to talk about anything or have any good hiking spots you want to recommend."
        text="Use the form here to send me a note directly from the site."
      >
        <Card className="contact-card contact-intro-card h-100">
          <Card.Body>
            <p className="eyebrow">Send a message</p>
            <h2>Drop a note directly from the site</h2>
            <p>
              Messages from this form can be delivered straight to my inbox once
              EmailJS is connected.
            </p>
            <ContactForm />
          </Card.Body>
        </Card>
      </PageIntro>

    </>
  )
}

export default ConnectPage
