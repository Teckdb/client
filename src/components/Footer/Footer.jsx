import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="footer-content">
                    <Col >

                    </Col>
                </Row>
                <Row className="footer-links">
                    <Col className="text-center">
                        <a href="/" className="footer-link">Home</a>
                        <a href="/about" className="footer-link">About Us</a>
                        <a href="/services" className="footer-link">Services</a>
                        <a href="/blog" className="footer-link">Blog</a>
                        <a href="/contact" className="footer-link">Contact</a>
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
