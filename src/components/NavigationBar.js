import React from "react";
import SearchBar from "./SearchBar";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar({ searchText, setSearchText }) {
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"} className="nav-font">
            Media Max
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/form">
                Add Movie
              </Nav.Link>
              <Nav.Link as={Link} to="/favorites">
                Favorites
              </Nav.Link>
            </Nav>
            <Form>
              <SearchBar
                className="search"
                searchText={searchText}
                setSearchText={setSearchText}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavigationBar;