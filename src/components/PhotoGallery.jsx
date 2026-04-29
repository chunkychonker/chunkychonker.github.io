import { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'

function PhotoGallery({ photos }) {
  const [activePhoto, setActivePhoto] = useState(null)

  return (
    <>
      <Row className="g-4">
        {photos.map((photo) => (
          <Col md={6} lg={4} key={photo.src}>
            <Card className="gallery-card h-100">
              <button
                type="button"
                className="gallery-photo-button"
                onClick={() => setActivePhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`gallery-photo ${
                    photo.orientation === 'portrait' ? 'gallery-photo-portrait' : ''
                  }`.trim()}
                />
              </button>
              <Card.Body>
                <p className="eyebrow mb-2">{photo.tag}</p>
                <h3 className="gallery-card-title">{photo.title}</h3>
                {photo.caption ? (
                  <p className="gallery-card-copy">{photo.caption}</p>
                ) : null}
                <Button variant="outline-dark" onClick={() => setActivePhoto(photo)}>
                  View larger
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        show={Boolean(activePhoto)}
        onHide={() => setActivePhoto(null)}
        centered
        size="lg"
      >
        {activePhoto ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{activePhoto.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="gallery-modal-body">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="gallery-modal-image"
              />
              {activePhoto.caption ? (
                <p className="gallery-modal-copy">{activePhoto.caption}</p>
              ) : null}
            </Modal.Body>
          </>
        ) : null}
      </Modal>
    </>
  )
}

export default PhotoGallery
