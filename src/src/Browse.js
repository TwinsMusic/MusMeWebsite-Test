import React from "react";
import {Card, Row, Col, Button} from 'react-bootstrap';

function Browse() {
  return (
    <section class="section">
    <div class="container">
        <h1 class = "has-text-centered">Browse Music</h1>
        <Row xs={1} md={3} className="g-3">
    <Col>
      <Card>
        <Card.Img variant="top" src="browse/ringtones.jpeg" />
        <Card.Body className="has-text-centered">
        <Button id="button-style">Ringtones</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="browse/moods.jpg" />
        <Card.Body className="has-text-centered">
        <Button id="button-style">Moods</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="browse/sound-effects.jpg" />
        <Card.Body className="has-text-centered">
          <Button id="button-style">Sound Effects</Button>
        </Card.Body>
      </Card>
    </Col>
</Row>
    </div>
    </section>

    
  );
}

export default Browse;
