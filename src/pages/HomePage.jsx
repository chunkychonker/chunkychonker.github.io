import { Col, Container, Row } from 'react-bootstrap'
import HeroSection from '../components/HeroSection'
import InterestCard from '../components/InterestCard'

const interests = [
  {
    icon: '🏔️',
    tag: 'Outdoors',
    title: 'Nature and adventure',
    text: 'Hiking, camping, and skiing have all been prevalent in my life growing up in WA.',
  },
  {
    icon: '🎮',
    tag: 'Competition',
    title: 'Valorant',
    text: 'I enjoy games like Valorant as they help me channel my competitive side, and I like the strategy and thinking aspect of the game.',
  },
  {
    icon: '💻',
    tag: 'Building',
    title: 'Technical curiosity',
    text: "I've recently been very interested in AI research and developing deep learning models. I'm currently working on my own model as a personal project",
  },
]

function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="content-section">
        <Container>
          <div className="section-copy-block">
            <p className="eyebrow">Interests at a glance</p>
            <h2>Three parts of life that show up again and again in what I do.</h2>
          </div>
          <Row className="g-4">
            {interests.map((interest) => (
              <Col md={6} lg={4} key={interest.title}>
                <InterestCard {...interest} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="content-section muted-section">
        <Container>
          <div className="section-copy-block">
            <p className="eyebrow">Why this site exists</p>
            <h2>It is a quick portfolio for the things that matter most to me right now.</h2>
          </div>
        </Container>
      </section>
    </>
  )
}

export default HomePage
