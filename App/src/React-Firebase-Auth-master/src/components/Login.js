import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import classes from "./LoginPage.module.css"
import video from './screen-capture (3) (2) (1).MOV'
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
    <video autoPlay loop muted className={classes.Video_background}>
      <source src={video} type='video/mp4' ></source>
      </video>
      <div className={classes.Login_Title}>
                    <h3>Your #1 source for sports analytics</h3>
                  </div>
                  <div className={classes.vertical_line}></div>
        <div className={classes.LoginPage}>
     
          <form>
         
      <Card>
        <Card.Body>
          <h2 className={classes.logIn_text}>LogIn</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className={classes.email}>
              <Form.Label style={{paddingRight:'20px',marginTop:'20px'}}>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} className={classes.emailField} required />
            </Form.Group>
            <Form.Group className={classes.password}>
              <Form.Label style={{paddingTop:'120px'}}>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} className={classes.passField} required />
            </Form.Group>
            <Button disabled={loading} className={classes.LogIn_button} type="submit">
              Log In
            </Button>
          </Form>
          
          <div className={classes.signUp_Button}>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      </form>
      <div className={classes.signUp_Button}>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </div>
    </>
  );
}
