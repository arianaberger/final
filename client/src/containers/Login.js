import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = ({handleLoginFormChange, handleLoginFormSubmit}) => {
  return (
    <div className="LoginForm">
    <h5>Login</h5>
    <Form onSubmit={handleLoginFormSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              name="email"
              onChange={handleLoginFormChange}
             />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="password"
              onChange={handleLoginFormChange}

             />
          </Form.Group>
          <div className="submit-button">
            <Button variant="info" type="submit" block>
              Login
            </Button>
          </div>
      </Form>
    </div>
  )
}

export default Login;
