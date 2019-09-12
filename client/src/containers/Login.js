import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <div>
    <Form >
          <Form.Group>
            <Form.Control
              type="text"
              name="email"
             />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="password"
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
