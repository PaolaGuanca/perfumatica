import CartWidget from '../componentes/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
    return (
      <div>        
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Perfumática</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>      
            <Nav.Link href="#link">Marcas</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mujer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hombre</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4">Unisex</NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>
      </div>
    );
  };

  export default NavBar;