import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './CoffeeCard.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import EditCoffeeForm from '../EditCoffeeForm/EditCoffeeForm';
import './CoffeeCardForAdmin.css';

const CoffeCardForAdmin = ({ name, id }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Link onClick={handleShow} className='linkDecorationNone'>
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditCoffeeForm id={id} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default CoffeCardForAdmin;