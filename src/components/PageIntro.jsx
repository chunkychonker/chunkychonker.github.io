import { Badge, Col, Container, Row } from 'react-bootstrap'

function PageIntro({ badge, title, text, children }) {
  return (
    <section className="page-intro">
      <Container>
        <Row className="g-4 align-items-start">
          <Col lg={children ? 6 : 12}>
            <Badge bg="light" text="dark" className="section-badge">
              {badge}
            </Badge>
            <h1 className="page-title">{title}</h1>
            {text ? <p className="page-copy">{text}</p> : null}
          </Col>
          {children ? (
            <Col lg={6}>
              {children}
            </Col>
          ) : null}
        </Row>
      </Container>
    </section>
  )
}

export default PageIntro
