import './Footer.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="footer-links">
                    <Col className="text-center">
                        <a href="/" className="footer-link">Home</a>
                        <a href="/about" className="footer-link">About Us</a>
                        <a href="/admin" className="footer-link">Admin Panel</a>
                        <a href="/wiki-coffee" className="footer-link">Blog</a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p className="footer-text">© 2024 Iron Coffee Lovers. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
