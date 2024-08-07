import axios from 'axios';
import { useState } from 'react';
import { Col, FloatingLabel, Row, Button, Form, InputGroup } from 'react-bootstrap';
const API_URL = 'http://localhost:5005'

const AddNewCoffeePotForm = () => {
    const [coffeePotData, setCoffeePotData] = useState({
        potId: 0,
        name: "",
        extraction: "",
        barPressure: 0,
        image: "URL",                      // TODO: RENOMINAR A IMAGE
        description: ""
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setCoffeePotData({ ...coffeePotData, [name]: value })
    }

    const handleCoffeePotSubmit = e => {
        e.preventDefault()

        axios
            .post(`${API_URL}/coffeePots`, coffeePotData)
            .then(alert("ready"))
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleCoffeePotSubmit}>
            <Form.Label className='h1'>New Coffee Pot</Form.Label>
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
                            onChange={handleInputChange} />
                    </FloatingLabel>
                </InputGroup>
            </Form.Group>
            <Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Row>
        </Form >
    )
}

export default AddNewCoffeePotForm