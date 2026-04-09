import { Badge, Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={7}>
            <Badge bg="light" text="dark" className="section-badge">
              Based in the PNW
            </Badge>
            <h1 className="hero-title">Hobbies, interests, and projects.</h1>
            <p className="hero-copy">
              I am a computer science student at UW Madison, who likes building with technology, hooping
              competing in Valorant, and enjoying the outdoors.
            </p>
            <Stack direction="horizontal" gap={3} className="flex-wrap">
              <Button as={Link} to="/highlights" variant="dark" size="lg">
                Explore highlights
              </Button>
              <Button as={Link} to="/connect" variant="outline-light" size="lg">
                Contact me
              </Button>
            </Stack>
          </Col>
          <Col lg={5}>
            <div className="hero-photo-frame">
              <img
                src="/images/mountain.jpeg"
                alt="Mountain view in the Pacific Northwest."
                className="hero-photo"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
