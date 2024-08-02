import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, FloatingLabel, Row, Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
const API_URL = 'http://localhost:5005'

const EditCoffeePotForm = () => {

    const [CoffeePotData, setCoffeePotData] = useState({
        potId: 0,
        name: "",
        extraction: "",
        barPressure: 0,
        imagen: "URL",
        description: ""
    })

    const { id } = useParams()
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
            .put(`${API_URL}/coffeePots/${id}`, CoffeePotData)
            .then(res => alert("send"))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setCoffeePotData({ ...CoffeePotData, [name]: value })
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
                            value={CoffeePotData.potId}
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
                            value={CoffeePotData.name}
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
                                value={CoffeePotData.extraction}
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
                                value={CoffeePotData.barPressure}
                                name='barPressure'
                                placeholder="Bar Pressure"
                                onChange={handleInputChange} />
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="imagenField">

                <FloatingLabel
                    controlId="imagenField"
                    label="Image URL"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        value={CoffeePotData.imagen}
                        name='imagen'
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
                            value={CoffeePotData.description}
                            name='description'
                            aria-label="With textarea"
                            placeholder='Description'
                            onChange={handleInputChange} />
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