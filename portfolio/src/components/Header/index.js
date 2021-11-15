import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>

            {/* Navlinks and their Relation ships */}

            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#technologies">Technologies</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//export function Header
export default Header;
