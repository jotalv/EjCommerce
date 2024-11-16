import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../public/EJ_logo.png'

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark center">
      <Container fluid>
        <Navbar.Brand href="/home"><img src={Logo} className='logo'/></Navbar.Brand>
        <Navbar.Toggle style={{ color: 'white'}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/loja" className='text-light'>Loja</Nav.Link>
            <Nav.Link href="/quemsomos" className='text-light' >Quem somos?</Nav.Link>
            <Nav.Link href="/politicadeprivacidade" className='text-light'>
              Política de privacidade
            </Nav.Link>
            <Nav.Link href="suporte" className='text-light'>Suporte</Nav.Link>
            <Nav.Link href="carrinho" className='text-light'><i class="fa fa-shopping-cart" aria-hidden="true"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;