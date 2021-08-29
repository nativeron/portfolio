import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import puzzle from '../img/puzzle.png'
export default function NavB() {
    return (
        <div>
              <Navbar bg="light" expand="lg" variant="light">
    <Container>
    <img style={{width:'30px', marginRight:'10px'}} src={puzzle} alt='logo'/>
    <Navbar.Brand href="#home">Natalia Verón</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Sobre mí</Nav.Link>
      <Nav.Link href="#features">Proyectos & Skills</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    )
}
