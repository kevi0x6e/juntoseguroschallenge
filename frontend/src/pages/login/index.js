import React, { useRef } from "react";

import { useHistory } from "react-router-dom";

import { Form, Button, Container } from "react-bootstrap";

import api from "../../services/api";
import { login } from "../../services/auth";

const pageStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const history = useHistory();

  return (
    <div style={pageStyle}>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={() =>
              api
                .post("/auth/login", {
                  email: emailRef.current.value,
                  password: passwordRef.current.value,
                })
                .then(({ data }) => {
                  login(data.access_token);
                  history.push("/tasks");
                })
                .catch(() =>
                  alert("Usuário ou senha incorretos, tente novamente.")
                )
            }
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
