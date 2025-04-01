import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const NavbarMenu = function () {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            Your Favorite BookShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-uppercase">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="text-uppercase">
                About
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-uppercase">
                Browser
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarMenu
