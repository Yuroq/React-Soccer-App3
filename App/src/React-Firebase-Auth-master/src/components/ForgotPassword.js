import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import classes from "./ForgotPass.module.css"
export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
    <section className={classes.background}>
      <div className={classes.ForgotPassword_Form}>
      <Card>
        <Card.Body>
          <h2 className={classes.forgotPassText}>Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className={classes.email}>
              <Form.Label style={{paddingRight:'20px'}}>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} className={classes.emailField} required />
            </Form.Group>
            <Button disabled={loading} className={classes.ResetPassButton} type="submit">
              Reset Password
            </Button>
          </Form>
          <div className={classes.logIn}>
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className={classes.signUp}>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </div>
      </section>
    </>
  );
}
