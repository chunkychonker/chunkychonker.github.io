import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function SiteNavbar() {
  return (
    <Navbar expand="lg" className="site-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand-mark">
          steve ling<span className="brand-accent">.</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="primary-nav" />
        <Navbar.Collapse id="primary-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link as={NavLink} to="/" end>
              home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/highlights">
              highlights
            </Nav.Link>
            <Nav.Link as={NavLink} to="/connect">
              connect
            </Nav.Link>
            <Button
              as={NavLink}
              to="/connect"
              variant="dark"
              className="nav-cta mt-3 mt-lg-0"
            >
              say hello
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default SiteNavbar
