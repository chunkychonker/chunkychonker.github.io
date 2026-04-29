import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import InstagramReelCard from '../components/InstagramReelCard'
import PageIntro from '../components/PageIntro'
import PhotoGallery from '../components/PhotoGallery'
import StoryPanel from '../components/StoryPanel'

const featuredReelUrl = 'https://www.instagram.com/p/C34EwMDL4WP/'

const galleryPhotos = [
  {
    src: '/images/IMG_1360.jpg',
    alt: 'Personal outdoor photo from a trip or hike.',
    tag: 'Camera roll',
    title: 'Sittin ona Bridge',
    caption: 'Colchuck Lake, WA',
    orientation: 'portrait',
  },
  {
    src: '/images/IMG_5402.jpeg',
    alt: 'Personal photo from an outdoor adventure.',
    tag: 'Favorite Shot',
    title: 'Last Sunset of the Summer',
  },
  {
    src: '/images/IMG_4842.JPEG',
    alt: 'Personal landscape or travel photo.',
    tag: 'Snapshot',
    title: 'Pristine Alpine Lake',
    caption: 'Somewhere in the cascades',
  },
  {
    src: '/images/hike-alt.jpg',
    alt: 'Outdoor hiking scene with trees and mountain landscape.',
    tag: 'Camera roll',
    title: 'Trail Memory',
  },
  {
    src: '/images/IMG_1286.jpg',
    alt: 'Pacific Northwest outdoor photo from the gallery collection.',
    tag: 'Camera roll',
    title: 'Outdoor Memory 01',
  },
  {
    src: '/images/IMG_1382.jpg',
    alt: 'Pacific Northwest outdoor photo from the gallery collection.',
    tag: 'Camera roll',
    title: 'Outdoor Memory 02',
    orientation: 'portrait',
  },
  {
    src: '/images/IMG_1387.jpg',
    alt: 'Pacific Northwest outdoor photo from the gallery collection.',
    tag: 'Camera roll',
    title: 'Outdoor Memory 03',
    orientation: 'portrait',
  },
  {
    src: '/images/IMG_2635.jpg',
    alt: 'Pacific Northwest outdoor photo from the gallery collection.',
    tag: 'Camera roll',
    title: 'Outdoor Memory 04',
    orientation: 'portrait',
  },
  {
    src: '/images/IMG_2718.jpg',
    alt: 'Pacific Northwest outdoor photo from the gallery collection.',
    tag: 'Camera roll',
    title: 'Outdoor Memory 05',
    orientation: 'portrait',
  },
  {
    src: '/images/IMG_4868.jpg',
    alt: 'Pacific Northwest outdoor photo from the gallery collection.',
    tag: 'Camera roll',
    title: 'Outdoor Memory 06',
    orientation: 'portrait',
  },
  {
    src: '/images/IMG_6684.jpg',
    alt: 'Pacific Northwest outdoor photo from the gallery collection.',
    tag: 'Camera roll',
    title: 'Outdoor Memory 07',
    orientation: 'portrait',
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
            text="Growing up in the Pacific Northwest made the outdoors a big part of my life. Hiking is one of the easiest ways for me to step away from stress, practice mindfulness, and spend time with friends."
            image="/images/hike.jpg"
            alt="Mount Si."
            showButton={false}
          />

          <StoryPanel
            badge="Competitive Gaming"
            title="Valorant taught me how much I enjoy coordinated team play and strategy"
            text="I picked up Valorant in high school and kept pushing because I loved how much progress comes from communication, discipline, and learning with other people. I've hit radiant multiple acts and peaked top 100 in NA.
            At UW Madison, I've won multiple state titles as well as placing well in national tournaments with my team."
            image="/images/IMG_3361.PNG"
            alt="Steve playing Valorant at an esports setup."
            imageClassName="story-image-contain story-image-compact"
            showButton={false}
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
                <h2>What I am actively balancing this school semester</h2>
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
            <h2>Some photos of the pacific northwest.</h2>
            <p>
              Windows into the outdoors of WA.
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
                <h2>Some Clips from a Snoqualmie Pow Day.</h2>
                <p>
                  Skiing is another outdoor activity I'm passionate about. It not only gives me the chance to spend time in the mountains during the 
                  winter, but also lets me push myself physically and mentally.
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <InstagramReelCard
                eyebrow="Instagram"
                title="Ski Clips from Snoqualmie Pow Day"
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
