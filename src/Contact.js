import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
    alert("Your message has been sent!");
  };

  return (
    <Container>
      <h1 className="text-center my-4">Contact Us</h1>

      
      <Row className="my-5">
        <Col md={12}>
          <h3>If you have any questions or inquiries, feel free to reach out to us!</h3>
        </Col>
      </Row>

      <Row className="my-5">
        <Col md={12}>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
              <FormLabel>Name</FormLabel>
              <FormControl
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Email</FormLabel>
              <FormControl
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Message</FormLabel>
              <FormControl
                as="textarea"
                rows={4}
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
