import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar expand="md" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="src/assets/LOGO CLANDESTINO blanco.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Coffees</Nav.Link>
                        <Nav.Link href="#link">About us</Nav.Link>
                        <NavDropdown title="Wikicoffee" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Articles</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Tips
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Videos
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;