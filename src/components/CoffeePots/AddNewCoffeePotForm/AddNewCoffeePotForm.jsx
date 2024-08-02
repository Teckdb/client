import axios from 'axios';
import { useState } from 'react';
import { Col, FloatingLabel, Row, Button, Form, InputGroup } from 'react-bootstrap';
const API_URL = 'http://localhost:5005'

const AddNewCoffeePotForm = () => {

    const [CoffeePotData, setCoffeePotData] = useState({
        potId: 0,
        name: "",
        extraction: "",
        barPressure: 0,
        imagen: "URL",
        description: ""
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setCoffeePotData({ ...CoffeePotData, [name]: value })
    }

    const handleCoffeePotSubmit = e => {
        e.preventDefault()

        axios
            .post(`${API_URL}/coffeePots`, CoffeePotData)
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

        </Form >
    )
}

export default AddNewCoffeePotForm