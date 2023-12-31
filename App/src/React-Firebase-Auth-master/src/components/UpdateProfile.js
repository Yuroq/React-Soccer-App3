import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import classes from "./Update.module.css"
export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
        <section className={classes.background}>
        <div className={classes.Update_Form}>
      <Card>
        <Card.Body>
          <h2 className={classes.Update_text}>Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className={classes.email}>
              <Form.Label style={{paddingRight:"20px"}}className={classes.label}>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                className={classes.emailField}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group className={classes.email}>
              <Form.Label className={classes.label}>Password</Form.Label>
              <Form.Control
              className={classes.emailField}
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group className={classes.email}>
              <Form.Label className={classes.label}>Password Confirmation</Form.Label>
              <Form.Control
              className={classes.emailField}
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading} className={classes.Update_Button} type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className={classes.cancel}>
        <Link to="/">Cancel</Link>
      </div>
      </div>
      </section>
    </>
  );
}
