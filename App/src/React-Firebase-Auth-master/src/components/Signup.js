import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import classes from "./SignUp.module.css"
export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
        <section className={classes.background}>
        <div className={classes.Signup_Form}>
      <Card>
        <Card.Body>
          <h2 className={classes.signUp_text}>Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className={classes.email}>
              <Form.Label style={{paddingRight:'40px'}}className={classes.label}>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} className={classes.emailField} required />
            </Form.Group>
            <Form.Group className={classes.email}>
              <Form.Label style={{paddingRight:'10px'}}className={classes.label}>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} className={classes.passField} required />
            </Form.Group>
            <Form.Group className={classes.email}>
              <Form.Label className={classes.label}>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} className={classes.ConfirmpassField} required />
            </Form.Group>
            <Button disabled={loading} className={classes.signUp_Button} type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className={classes.logIn_Text}>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      </div>
      </section>
    </>
  );
}
