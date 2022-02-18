import React, {useState} from "react";
import {Form, Button, Col, Row} from 'react-bootstrap';

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <section class="section">
    <div class="container">
    <h1 class = "has-text-centered">Customize Your Music</h1>
    <br></br>
    <p><Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label><b>First name</b></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback type="invalid">
          This field is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label><b>Last name</b></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback type="invalid">
          This field is required.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label><b>Email</b></Form.Label>
          <Form.Control type="email" placeholder="name@example.com" required />
          <Form.Control.Feedback type="invalid">
          Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom04">
      <Form.Label>
      <b>Music is for?</b>
      </Form.Label>
      <Col>
      <Form.Select required>
      <option value="1">Commercial Use</option>
      <option value="2">Educational Use</option>
      <option value="3">Personal Use</option>
      </Form.Select>
      <Form.Control.Feedback type="invalid">
      This field is required.
      </Form.Control.Feedback>
      </Col>
      </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label><b>Instrument Type</b></Form.Label>
          <Form.Control type="text" placeholder="example: piano, vocal, etc" required />
          <Form.Control.Feedback type="invalid">
          This field is required.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom06">
      <Form.Label>
      <b>Music Type</b>
      </Form.Label>
      <Col>
      <Form.Select required>
      <option value="1">Jazz</option>
      <option value="2">Classical</option>
      <option value="3">Orchestra</option>
      <option value="4">Pop</option>
      <option value="5">World</option>
      <option value="6">Folk</option>
      <option value="6">Others</option>
      </Form.Select>
      <Form.Control.Feedback type="invalid">
      This field is required.
      </Form.Control.Feedback>
      </Col>
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom07">
      <Form.Label>
      <b>Occasion/Platform</b>
      </Form.Label>
      <Col>
      <Form.Select required>
      <option value="1">TV Commercial</option>
      <option value="2">Wedding</option>
      <option value="3">Student film</option>
      <option value="4">Youtube</option>
      <option value="5">Others</option>
      </Form.Select>
      <Form.Control.Feedback type="invalid">
      This field is required.
      </Form.Control.Feedback>
      </Col>
      </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label><b>What else would you like us to know?</b></Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>
      <Button id="button-style" type="submit">Submit</Button>
    </Form>
    </p>
    </div>
    </section>
    
  );
}

export default Contact;
