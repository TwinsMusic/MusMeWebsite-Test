import {Card, Row, Col, Button} from 'react-bootstrap';
import Title from "./Title.js";
import Content from "./Content";
import { Link } from 'react-router-dom';

const title = Title("Browse","Music Samples");

const content = Content(
  <section class="section">
    <div class="container">
        <h1 class = "has-text-centered">Browse Music</h1>
        <Row xs={1} md={3} className="g-3">
    <Col>
      <Card style={{backgroundColor:"#12153e", borderWidth: 3, borderColor: "#0e1132", elevation: 0}}>
        <Card.Img variant="top" src="images/browse/ringtones.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/ringtones">
        <button id="button-style" class="button is-primary is-rounded">Ringtones</button>
        </Link>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{backgroundColor:"#12153e", borderWidth: 3, borderColor: "#0e1132", elevation: 0}}>
        <Card.Img variant="top" src="images/browse/moods.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/moods">
        <button id="button-style" class="button is-primary is-rounded">Moods</button>
        </Link>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{backgroundColor:"#12153e", borderWidth: 3, borderColor: "#0e1132", elevation: 0}}>
        <Card.Img variant="top" src="images/browse/sound-effects.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/soundeffects">
        <button id="button-style" class="button is-primary is-rounded">Sound Effects</button>
        </Link>
        </Card.Body>
      </Card>
    </Col>
</Row>
    </div>
    </section>
);

function Browse() {
  return (
    <div> 
        {title}
        {content}
    </div>
);
}

export default Browse;
