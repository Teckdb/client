import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PiEyesFill } from "react-icons/pi";
import { FiAlertTriangle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { CiLogin } from "react-icons/ci";
import { FaHand } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ErrorPage = () => {
    const [modalStep, setModalStep] = useState(0);

    const handleNextModal = () => {
        if (modalStep < 4) {
            setModalStep(modalStep + 1);
        }
    };

    const handleClose = () => {
        if (modalStep === 4) {
        } else {
            setModalStep(0);
        }
    };

    const renderModalContent = () => {
        if (modalStep === 1) {
            return (
                <>
                    <h1>404 Error</h1>
                    <p>There's nothing here to see. Move along.</p>
                    <PiEyesFill size={50} />
                </>
            );
        } else if (modalStep === 2) {
            return (
                <>
                    <h1>Unauthorized Access</h1>
                    <p>You shouldn't be here. Please go back.</p>
                    <FiAlertTriangle size={50} />
                </>
            );
        } else if (modalStep === 3) {
            return (
                <>
                    <h1>Try logging...</h1>
                    <p>Okay, try logging in to gain access.</p>
                    <CiLogin size={50} />
                </>
            );
        } else if (modalStep === 4) {
            return (
                <>
                    <h1>404 Page</h1>
                    <div><iframe src="https://giphy.com/embed/TJawtKM6OCKkvwCIqX" ></iframe></div>
                    <p>Seriously? This is a 404 page, you melon. Come on, go home.</p>
                    <FaHand size={50} />
                </>
            );
        }
        return null;
    }

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center min-vh-100 text-center'>
            <Button variant="primary" onClick={() => setModalStep(1)}>
                Don't push here...
            </Button>
            <Modal show={modalStep >= 1} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>Warning {modalStep}/3</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className="text-center mt-5 mb-5">
                        <Row>
                            <Col>
                                {renderModalContent()}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" as={Link} to="/" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleNextModal}>
                        {modalStep < 3 ? 'Next' : null}
                        {modalStep === 4 && 'Close'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default ErrorPage

