import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PageFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-4 align-items-start">
          <Col md={6}>
            <p className="footer-kicker">built with react, react router, and bootstrap</p>
          </Col>
          <Col md={3}>
            <h3 className="footer-heading">Navigate</h3>
            <Link to="/">Home</Link>
            <Link to="/highlights">Highlights</Link>
            <Link to="/connect">Connect</Link>
          </Col>
          <Col md={3}>
            <h3 className="footer-heading">Reach Out</h3>
            <a href="mailto:sling22@wisc.edu">sling22@wisc.edu</a>
            <a href="https://www.linkedin.com/in/steveling06" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/chunkychonker" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default PageFooter
