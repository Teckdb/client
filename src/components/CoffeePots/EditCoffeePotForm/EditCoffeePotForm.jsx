import { useEffect, useState } from 'react';
import { Col, FloatingLabel, Row, Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { API_URL } from './../../../conts/apiEndpoints'
import axios from 'axios';

const EditCoffeePotForm = ({ id }) => {
    const [coffeePotData, setCoffeePotData] = useState({
        potId: 0,
        name: "",
        extraction: "",
        barPressure: 0,
        image: "URL",
        description: ""
    })

    const navigate = useNavigate()

    useEffect(() => {
        fetchCoffeePotData()
    }, [])

    const fetchCoffeePotData = () => {
        axios
            .get(`${API_URL}/coffeePots/${id}`)
            .then(res => setCoffeePotData(res.data))
            .catch(err => console.log(err))
    }

    const deleteCoffeePot = () => {
        axios
            .delete(`${API_URL}/coffeePots/${id}`)
            .then(res => navigate(`/admin`))
            .catch(err => console.log(err))
    }

    const handleCoffeePotSubmit = e => {
        e.preventDefault()

        axios
            .put(`${API_URL}/coffeePots/${id}`, coffeePotData)
            .then(res => alert("send"))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setCoffeePotData({ ...coffeePotData, [name]: value })
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Form onSubmit={handleCoffeePotSubmit}>
            <Form.Label className='h1'>Edit Coffee Pot</Form.Label>
            <hr></hr>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="potIdField">
                    <FloatingLabel
                        controlId="potIdField"
                        label="Coffee Pot ID"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            value={coffeePotData.potId}
                            name='potId'
                            placeholder="Coffee Pot"
                            onChange={handleInputChange} />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="nameField">
                    <FloatingLabel
                        controlId="nameField"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            value={coffeePotData.name}
                            name='name'
                            placeholder="Name"
                            onChange={handleInputChange} />
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row>
                <Col lg={8}>
                    <Form.Group className="mb-3" controlId="extractionField">
                        <FloatingLabel
                            controlId="extractionField"
                            label="Extraction Method"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                value={coffeePotData.extraction}
                                name='extraction'
                                placeholder="Extraction Method"
                                onChange={handleInputChange} />
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3" controlId="barPressureField">
                        <FloatingLabel
                            controlId="barPressureField"
                            label="Bar Pressure"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                value={coffeePotData.barPressure}
                                name='barPressure'
                                placeholder="Bar Pressure"
                                onChange={handleInputChange} />
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="imageField">
                <FloatingLabel
                    controlId="imageField"
                    label="Image URL"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        value={coffeePotData.image}
                        name='image'
                        placeholder="Image URL"
                        onChange={handleInputChange} />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="descriptionField">
                <InputGroup>
                    <FloatingLabel
                        controlId="descriptionField"
                        label="Description"
                        className="mb-3"
                    >
                        <Form.Control
                            as="textarea"
                            value={coffeePotData.description}
                            name='description'
                            aria-label="With textarea"
                            placeholder='Description'
                            onChange={handleInputChange}
                            style={{ width: '100%', minHeight: '200px' }}
                        />
                    </FloatingLabel>
                </InputGroup>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this item? This action cannot be undone.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={deleteCoffeePot}>
                        Delete this item
                    </Button>
                </Modal.Footer>
            </Modal>
            <Button variant='danger' onClick={handleShow} className='ms-3'>
                Delete
            </Button>
        </Form >
    )
}
export default EditCoffeePotForm