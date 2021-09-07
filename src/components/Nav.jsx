import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../context/context'
import spanish from '../spain.json'
import english from '../english.json'
import { Link} from "react-scroll";
import '../styles/Nav.scss'
export default function NavB() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const {data, setData} = useContext(PortfolioContext)
  const [clickedId, setClickedId] = useState('es');
  const handleButton = (e) => {
    setClickedId(e.target.name)
    if (e.target.name==='en') {setData(english)}
    else {setData(spanish)}
  }
    return (
      <>
      <nav className="navbar" id='nav'>
        <div className="nav-container">
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  
            <li className="nav-item">
            <Link activeClass="active" to="about" className='nav-links' spy={true} smooth={true}>
             {/*  <a href="#about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              > */}
                {data.nav[0]}
              {/* </a> */}
              </Link>
            </li>
            <li className="nav-item">
            <Link  to="work" className='nav-links' spy={true} smooth={true}>
                {data.nav[1]}
              </Link>
            </li>
            
            <li className="nav-item">
            <Link  to="contact" className='nav-links' spy={true} smooth={true}>
                {data.nav[2]}
              </Link>
            </li>
            <li style={{padding:'2.5rem'}}>
              <button name='es'  className={'en' === clickedId ? "customButton":null} onClick={(e)=>handleButton(e)} >ES</button>
              <button  name='en' className={'es' === clickedId ? "customButton":null} onClick={(e)=>handleButton(e)} >EN</button>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
        {/* <div>
              <Navbar id='nav' bg="dark" expand="lg" variant="light">
    <Container>
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
        </div> */}
    </>

    )
}


