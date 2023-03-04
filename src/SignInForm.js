import React, { useContext } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserContext from "./UserContext";

function SignInForm() {
    let [ credentials, setCredentials ] = useState({
        username: "",
        password: ""
      });

      let user = useContext(UserContext);

      function handleChange(event) {
        setCredentials((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value }
        });
      }

      function handleSubmit(event) {
        event.preventDefault();
      }

      return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" value={credentials.username} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={credentials.password} onChange={handleChange} />
          </Form.Group>
          <Button type="submit">Sign In</Button>
        </Form>
      );
}

export default SignInForm;