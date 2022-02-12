import React from 'react'
import { Navbar, Nav, Container, Form } from "react-bootstrap";

export default function NavbarComponent() {

  
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Frontend" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="CSS" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Javascript"/>
          </Form.Group>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
