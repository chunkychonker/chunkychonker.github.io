import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import InstagramReelCard from '../components/InstagramReelCard'
import PageIntro from '../components/PageIntro'
import PhotoGallery from '../components/PhotoGallery'
import StoryPanel from '../components/StoryPanel'

const featuredReelUrl = 'https://www.instagram.com/p/C34EwMDL4WP/'

const galleryPhotos = [
  {
    src: '/images/hike.jpg',
    alt: 'View of a mountain trail and surrounding ridges.',
    tag: 'Trail day',
    title: 'Mountain overlook',
  },
  {
    src: '/images/hike-alt.jpg',
    alt: 'Outdoor hiking scene with trees and mountain landscape.',
    tag: 'Outdoors',
    title: 'Another trail memory',
  },
  {
    src: '/images/mountain.jpeg',
    alt: 'Wide mountain landscape under open sky.',
    tag: 'Scenery',
    title: 'PNW energy',
  },
  {
    src: '/images/IMG_1360.jpg',
    alt: 'Personal outdoor photo from a trip or hike.',
    tag: 'Camera roll',
    title: 'Trip highlight',
    caption: 'One of the photos that felt worth keeping because it captures the atmosphere really well.',
  },
  {
    src: '/images/IMG_1286.jpg',
    alt: 'Personal photo from the highlights collection.',
    tag: 'Camera roll',
    title: 'Memory 01',
  },
  {
    src: '/images/IMG_1382.jpg',
    alt: 'Personal photo from the highlights collection.',
    tag: 'Camera roll',
    title: 'Memory 02',
  },
  {
    src: '/images/IMG_1387.jpg',
    alt: 'Personal photo from the highlights collection.',
    tag: 'Camera roll',
    title: 'Memory 03',
  },
  {
    src: '/images/IMG_2635.jpg',
    alt: 'Personal photo from the highlights collection.',
    tag: 'Camera roll',
    title: 'Memory 04',
  },
  {
    src: '/images/IMG_2718.jpg',
    alt: 'Personal photo from the highlights collection.',
    tag: 'Camera roll',
    title: 'Memory 05',
  },
  {
    src: '/images/IMG_3361.PNG',
    alt: 'Personal photo from the highlights collection.',
    tag: 'Camera roll',
    title: 'Memory 06',
  },
  {
    src: '/images/IMG_4868.jpg',
    alt: 'Personal photo from the highlights collection.',
    tag: 'Camera roll',
    title: 'Memory 07',
  },
  {
    src: '/images/IMG_5402.jpeg',
    alt: 'Personal photo from an outdoor adventure.',
    tag: 'Favorite shot',
    title: 'Weekend outside',
  },
  {
    src: '/images/IMG_6684.jpg',
    alt: 'Personal photo from the highlights collection.',
    tag: 'Camera roll',
    title: 'Memory 08',
  },
  {
    src: '/images/IMG_4842.JPEG',
    alt: 'Personal landscape or travel photo.',
    tag: 'Snapshot',
    title: 'One more view',
    caption: 'Adding a gallery here makes the page feel more personal and more complete.',
  },
]

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

      <section className="content-section">
        <Container>
          <div className="section-copy-block">
            <p className="eyebrow">Photo gallery</p>
            <h2>A few photos that capture the parts of life I keep coming back to.</h2>
            <p>
              I had already been collecting a bunch of photos, so this section turns
              them into something visitors can actually browse instead of leaving
              them buried in the project files.
            </p>
          </div>
          <PhotoGallery photos={galleryPhotos} />
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={5}>
              <div className="section-copy-block mb-0">
                <p className="eyebrow">Recent reel</p>
                <h2>A quick clip that shows why I keep coming back to the outdoors.</h2>
                <p>
                  I wanted one section here to feel a little more alive than just
                  text and photos. Embedding a reel makes this page feel closer to
                  how I actually share moments from hikes and trips.
                </p>
                <p>
                  This also gives the site one more interactive piece for visitors
                  to click into if they want to see more.
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <InstagramReelCard
                eyebrow="Instagram"
                title="Featured outdoor reel"
                text="Swap in your actual public reel link to show one of your recent hiking or travel clips right on the site."
                reelUrl={featuredReelUrl}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HighlightsPage
