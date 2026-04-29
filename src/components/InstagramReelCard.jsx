import { Button, Card } from 'react-bootstrap'

function getEmbedUrl(reelUrl) {
  if (!reelUrl) {
    return null
  }

  try {
    const { pathname } = new URL(reelUrl)
    const pathParts = pathname.split('/').filter(Boolean)
    const reelIndex = pathParts.findIndex((part) => part === 'reel' || part === 'p')

    if (reelIndex === -1 || !pathParts[reelIndex + 1]) {
      return null
    }

    return `https://www.instagram.com/reel/${pathParts[reelIndex + 1]}/embed/`
  } catch {
    return null
  }
}

function InstagramReelCard({ eyebrow, title, text, reelUrl }) {
  const embedUrl = getEmbedUrl(reelUrl)

  return (
    <Card className="contact-card reel-card">
      <Card.Body>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}

        <div className="reel-frame">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={title}
              className="reel-embed"
              scrolling="no"
              allowTransparency="true"
            />
          ) : (
            <div className="reel-placeholder">
              Add your Instagram reel URL in `HighlightsPage.jsx` to load the embed here.
            </div>
          )}
        </div>

        <Button
          href={reelUrl || 'https://www.instagram.com/'}
          target="_blank"
          rel="noreferrer"
          variant="outline-dark"
          className="mt-3"
        >
          Open on Instagram
        </Button>
      </Card.Body>
    </Card>
  )
}

export default InstagramReelCard
