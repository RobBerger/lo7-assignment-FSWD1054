import React from "react";

function SignInForm() {
    let [ credentials, setCredentials ] = useState({
        username: "",
        password: ""
      });

      return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" value={username} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={password} onChange={handleChange} />
          </Form.Group>
          <Button type="submit">Sign In</Button>
        </Form>
      );
}

export default SignInForm;