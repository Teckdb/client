import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Footer = () => {
    return (

        <footer className="bg-dark text-white mt-auto py-3">
            <Container>
                <div className="text-center">
                    <p>© 2024 Iron Coffee Lovers. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer