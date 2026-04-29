import { Badge, Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function StoryPanel({
  badge,
  title,
  text,
  image,
  alt,
  reverse = false,
  imageClassName = '',
  showButton = true,
}) {
  return (
    <Card className="story-panel">
      <Row className={`g-0 align-items-stretch ${reverse ? 'flex-lg-row-reverse' : ''}`}>
        <Col lg={5}>
          <img src={image} alt={alt} className={`story-image ${imageClassName}`.trim()} />
        </Col>
        <Col lg={7}>
          <Card.Body className="story-body">
            <Badge bg="dark" className="section-badge">
              {badge}
            </Badge>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            {showButton ? (
              <Button as={Link} to="/connect" variant="outline-dark">
                Let&apos;s talk
              </Button>
            ) : null}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default StoryPanel
