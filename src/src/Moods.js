import {Card, Row, Col, Button} from 'react-bootstrap';
import Title from "./Title.js";
import Content from "./Content";
import { Link } from 'react-router-dom';

const title = Title("Browse","Moods Library");

const content = Content(
  <section class="section">
    <div class="container">
        <h1 class = "has-text-centered">Moods</h1>
        <Row xs={1} md={3} className="g-3">
    <Col>
      <Card style={{backgroundColor:"#12153e", borderWidth: 3, borderColor: "#0e1132", elevation: 0}}>
        <Card.Img variant="top" src="/images/browse/moods/calm.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/calmmood">
        <button id="button-style" class="button is-primary is-rounded">Calm</button>
        </Link>
        </Card.Body>
      </Card>
    </Col> 
    <Col>
      <Card style={{backgroundColor:"#12153e", borderWidth: 3, borderColor: "#0e1132", elevation: 0}}>
        <Card.Img variant="top" src="/images/browse/moods/classic.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/classicmood">
        <button id="button-style" class="button is-primary is-rounded">Classic</button>
        </Link>
        </Card.Body>
      </Card>
    </Col> 
    <Col>
      <Card style={{backgroundColor:"#12153e", borderWidth: 3, borderColor: "#0e1132", elevation: 0}}>
        <Card.Img variant="top" src="/images/browse/moods/dreamy.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/dreamymood">
        <button id="button-style" class="button is-primary is-rounded">Dreamy</button>
        </Link>
        </Card.Body>
      </Card>
    </Col> 
    <Col>
      <Card style={{backgroundColor:"#12153e", borderWidth: 3, borderColor: "#0e1132", elevation: 0}}>
        <Card.Img variant="top" src="/images/browse/moods/epic.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/epicmood">
        <button id="button-style" class="button is-primary is-rounded">Epic</button>
        </Link>
        </Card.Body>
      </Card>
    </Col> 
    <Col>
      <Card style={{backgroundColor:"#12153e", borderWidth: 3, borderColor: "#0e1132", elevation: 0}}>
        <Card.Img variant="top" src="/images/browse/moods/happy.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/happymood">
        <button id="button-style" class="button is-primary is-rounded">Happy</button>
        </Link>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{backgroundColor:"#12153e", borderWidth: 3, borderColor: "#0e1132", elevation: 0}}>
        <Card.Img variant="top" src="/images/browse/moods/inspirational.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/inspirationalmood">
        <button id="button-style" class="button is-primary is-rounded">Inspirational</button>
        </Link>
        </Card.Body>
      </Card>
    </Col> 
    <Col>
      <Card style={{backgroundColor:"#12153e", borderWidth: 3, borderColor: "#0e1132", elevation: 0}}>
        <Card.Img variant="top" src="/images/browse/moods/jazzy.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/jazzymood">
        <button id="button-style" class="button is-primary is-rounded">Jazzy</button>
        </Link>
        </Card.Body>
      </Card>
    </Col> 
    <Col>
      <Card style={{backgroundColor:"#12153e", borderWidth: 3, borderColor: "#0e1132", elevation: 0}}>
        <Card.Img variant="top" src="/images/browse/moods/suspenseful.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/suspensefulmood">
        <button id="button-style" class="button is-primary is-rounded">Suspenseful</button>
        </Link>
        </Card.Body>
      </Card>
    </Col> 
</Row>
    </div>
    </section>
);

function Moods() {
  return (
    <div> 
        {title}
        {content}
    </div>
);
}

export default Moods;
