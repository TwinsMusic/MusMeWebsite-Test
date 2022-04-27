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
      <Card>
        <Card.Img variant="top" src="/images/browse/moods/calm.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/calmmood">
        <Button id="button-style">Calm</Button>
        </Link>
        </Card.Body>
      </Card>
    </Col> 
    <Col>
      <Card>
        <Card.Img variant="top" src="/images/browse/moods/classic.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/classicmood">
        <Button id="button-style">Classic</Button>
        </Link>
        </Card.Body>
      </Card>
    </Col> 
    <Col>
      <Card>
        <Card.Img variant="top" src="/images/browse/moods/dreamy.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/dreamymood">
        <Button id="button-style">Dreamy</Button>
        </Link>
        </Card.Body>
      </Card>
    </Col> 
    <Col>
      <Card>
        <Card.Img variant="top" src="/images/browse/moods/epic.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/epicmood">
        <Button id="button-style">Epic</Button>
        </Link>
        </Card.Body>
      </Card>
    </Col> 
    <Col>
      <Card>
        <Card.Img variant="top" src="/images/browse/moods/happy.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/happymood">
        <Button id="button-style">Happy</Button>
        </Link>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="/images/browse/moods/inspirational.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/inspirationalmood">
        <Button id="button-style">Inspirational</Button>
        </Link>
        </Card.Body>
      </Card>
    </Col> 
    <Col>
      <Card>
        <Card.Img variant="top" src="/images/browse/moods/jazzy.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/jazzymood">
        <Button id="button-style">Jazzy</Button>
        </Link>
        </Card.Body>
      </Card>
    </Col> 
    <Col>
      <Card>
        <Card.Img variant="top" src="/images/browse/moods/suspenseful.jpg" />
        <Card.Body className="has-text-centered">
        <Link to="/suspensefulmood">
        <Button id="button-style">Suspenseful</Button>
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
