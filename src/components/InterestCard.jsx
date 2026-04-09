import { Badge, Card } from 'react-bootstrap'

function InterestCard({ icon, title, text, tag }) {
  return (
    <Card className="interest-card h-100">
      <Card.Body>
        <div className="interest-icon" aria-hidden="true">
          {icon}
        </div>
        <Badge bg="secondary" className="interest-tag">
          {tag}
        </Badge>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default InterestCard
