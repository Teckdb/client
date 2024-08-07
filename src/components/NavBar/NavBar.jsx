import { Col, Container, Nav, Navbar, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SearchCoffees from '../Shared/SearchCoffees/SearchCoffees';

const NavBar = () => {
    return (
        <Navbar expand="md" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src=''
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Form >
                    <SearchCoffees />
                </Form>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={Link} to="/coffee-selector">Coffees</Nav.Link>
                        <Nav.Link as={Link} to="/about">About us</Nav.Link>
                        <Nav.Link as={Link} to="/wiki-coffee">Wiki Coffee</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;