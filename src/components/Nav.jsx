import React, { useContext } from 'react'
import { Navbar, Nav, Container, ButtonGroup, Button} from 'react-bootstrap'
import { PortfolioContext } from '../context/context'
import puzzle from '../img/puzzle.png'
import spanish from '../spain.json'
import english from '../english.json'
export default function NavB() {
  const {data, setData} = useContext(PortfolioContext)
    return (
        <div>
              <Navbar bg="light" expand="lg" variant="light">
    <Container>
    <img style={{width:'30px', marginRight:'10px'}} src={puzzle} alt='logo'/>
    <Navbar.Brand href="#home">Natalia Verón</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#about">{data.nav[0]}</Nav.Link>
      <Nav.Link href="#work">{data.nav[1]}</Nav.Link>
      <Nav.Link href="#contact">{data.nav[2]}</Nav.Link>
    </Nav>
    
    <ButtonGroup size="sm" aria-label="Basic example">
  <Button onClick={()=>setData(spanish)}className='btn-spain' variant='outline-dark'>ES</Button>
  <Button onClick={()=>setData(english)} variant='outline-dark'>EN</Button>
</ButtonGroup></Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    )
}
