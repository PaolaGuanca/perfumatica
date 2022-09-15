import CartWidget from '../componentes/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function NavBar() {
    return (
      <div>        
      <Navbar bg="light" expand="lg">
      <Container>
        <Link to='/'><span className="navLinkColor">Perfumática</span></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>      
            <Nav.Link href="#link">Marcas</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='/category/1'><span className="navLinkColorDW">Mujer</span></Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/category/2'><span className="navLinkColorDW">Hombre</span></Link></NavDropdown.Item>              
              <NavDropdown.Divider/>
              <NavDropdown.Item><Link to='/category/3'><span className="navLinkColorDW">Unisex</span></Link></NavDropdown.Item>
            </NavDropdown>
            <div className='carW'>
            <CartWidget />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>
      </div>
    );
  };

  export default NavBar;