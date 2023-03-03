import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";

function Home() {
    return (
        <>
          <Navbar bg="light" variant="light">
            <Container>
              <Nav className="me-auto">
                <Link to="/" className="nav-link">Home</Link>
              </Nav>
              <Navbar.Text>
                {authLink()}
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