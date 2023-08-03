import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import classes from "./Dashboard.module.css"
import {BiUserCircle} from 'react-icons/bi'
export default function ProfileInfo() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  async function handleProfileChange() {
    setError("");

    try {
   
      history.push("/update-profile");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
<div className={classes.accordion}>
<ul>
  <li>
  <a><strong><BiUserCircle className={classes.User_logo}/></strong>
   <span className={classes.User_email}> {currentUser.email}</span></a>
    <div className={classes.accordion_content}>
  
      <div className="w-100 text-center mt-2">
      <button  onClick={handleProfileChange}to="/update-profile" className={classes.update_profile}>
            Update Profile
          </button>
        <Button variant="link" onClick={handleLogout} className={classes.logOut_button}>
          Log Out
        </Button>
      </div>
    </div>
  </li>
</ul>

</div>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button> */}
    

      
    </>
  );
}
