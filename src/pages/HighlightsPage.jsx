import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import PageIntro from '../components/PageIntro'
import StoryPanel from '../components/StoryPanel'

function HighlightsPage() {
  return (
    <>
      <PageIntro
        badge="Highlights"
        title="A few highlights/ photos about my hobbies"
      />

      <section className="content-section">
        <Container>
          <StoryPanel
            badge="Featured story"
            title="Hiking"
            text="Growing up around the Pacific Northwest made outdoor spaces feel familiar. Hiking is still one of the easiest ways for me to step away from stress, enjoy where I am, and recharge."
            image="/images/hike.jpg"
            alt="Trail view overlooking mountains."
          />

          <StoryPanel
            badge="Competitive side"
            title="Valorant taught me how much I enjoy coordinated team play"
            text="I picked up Valorant in high school and kept pushing because I loved how much progress comes from communication, discipline, and learning with other people."
            image="/images/mountain.jpeg"
            alt="Mountain scene representing focused, competitive energy."
            reverse
          />
        </Container>
      </section>

      <section className="content-section muted-section">
        <Container>
          <Row className="g-4 align-items-start">
            <Col lg={6}>
              <div className="section-copy-block">
                <p className="eyebrow">Current mix</p>
                <h2>What I am actively balancing this semester</h2>
                <p>
                  School, side projects, and hobbies all pull in different
                  directions, so I try to keep a mix that feels challenging and fun.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <ListGroup className="detail-list">
                <ListGroup.Item>Coursework and software projects</ListGroup.Item>
                <ListGroup.Item>Exploring AI research</ListGroup.Item>
                <ListGroup.Item>Basketball, gaming, and time outside when I can get it</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HighlightsPage
