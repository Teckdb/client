import './NavBar.css'
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LOGO_SMALL } from '../../conts/imageData';
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialYoutubeCircular } from "react-icons/ti";
import SearchCoffees from '../Shared/SearchCoffees/SearchCoffees';

const NavBar = () => {
    return (
        <Navbar expand="md" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={LOGO_SMALL}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={Link} to="/coffee-selector">Coffees</Nav.Link>
                        <Nav.Link as={Link} to="/about">About us</Nav.Link>
                        <Nav.Link as={Link} to="/wiki-coffee">Wiki Coffee</Nav.Link>
                        <Nav.Link as={Link} to="/admin">Admin Panel</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className='m-3'>
                    <SearchCoffees className='instaicon' />
                </Form>
                <TiSocialFacebookCircular size={30} color='white' />
                <TiSocialTwitterCircular size={30} color='white' />
                <TiSocialYoutubeCircular size={30} color='white' />
            </Container>
        </Navbar>
    );
}

export default NavBar;