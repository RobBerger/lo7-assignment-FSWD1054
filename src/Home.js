import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import UserContext from "./UserContext";
import DisplayName from "./DisplayName";

function Home() {
    // let user = useContext(UserContext);
    return (
        <>
          <Navbar bg="light" variant="light">
            <Container>
              <Nav className="me-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="sign-in" className="nav-link">Sign In</Link>
              </Nav>
              <Navbar.Text>
                Test
              </Navbar.Text>
            </Container>
          </Navbar>
          <Stack gap={3} className="col-md-10 mx-auto">
            <Outlet />
          </Stack>
        </>
      );
}

export default Home;