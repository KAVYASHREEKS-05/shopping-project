import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <h1 className="text-center my-4">About Us</h1>

      {/* About Us Section */}
      <Row className="my-4 " >
        <Col md={6}>
          <h3>Who We Are</h3>
          <p>
            Welcome to SnapShop, where we are committed to providing
            exceptional products and services to our customers. Our team is
            dedicated to bringing you the best in product. With years of
            experience and a passion for innovation, we strive to make a difference
            in the lives of our customers.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://img.freepik.com/premium-photo/inside-mall-inspiration-design-professional-advertising-photography-ai-generated_925376-3239.jpg"
            alt="Team"
            className="img-fluid rounded"
            width={"400px"}
            height={"400px"}
          />
        </Col>
      </Row>

      <Row className="my-5">
        <Col md={12}>
          <h3>Our Mission</h3>
          <p>
            Our mission is to make product]more accessible and
            enjoyable for everyone. We believe in customer satisfaction, quality,
            and continuous improvement. We aim to stay at the forefront of innovation
            and provide solutions that are not only effective but also sustainable.
          </p>
        </Col>
      </Row>

      {/* Meet the Team Section */}
      <Row className="my-5">
        <Col md={12}>
          <h3>Meet Our Team</h3>
        </Col>
        <Col md={4} className="my-3">
          <Card>
            <Card.Img
              variant="top"
              src="https://randomuser.me/api/portraits/men/29.jpg"
              alt="Team Member 1"
            />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>CEO & Founder</Card.Text>
              <Button variant="primary">Contact John</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3">
          <Card>
            <Card.Img
              variant="top"
             src="https://randomuser.me/api/portraits/men/10.jpg"
              alt="Team Member 2"
            />
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>Lead Developer</Card.Text>
              <Button variant="primary">Contact Jane</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3">
          <Card>
            <Card.Img
              variant="top"
             src="https://randomuser.me/api/portraits/men/4.jpg"
              alt="Team Member 3"
            />
            <Card.Body>
              <Card.Title>Emily Brown</Card.Title>
              <Card.Text>Marketing Manager</Card.Text>
              <Button variant="primary">Contact Emily</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
