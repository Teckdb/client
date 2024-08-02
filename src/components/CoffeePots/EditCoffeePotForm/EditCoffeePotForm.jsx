import { useState } from 'react';
import { Col, FloatingLabel, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const EditCoffeePotForm = () => {

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

    return (
        <Form>
            <Row className="mb-3">
                <Form.Label className='h1'>Edit Coffee Pot</Form.Label>
                <hr></hr>
                <Form.Group as={Col} className="mb-3" controlId="potIdField">
                    <Form.Label>Coffee Pot ID</Form.Label>
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
                    <Form.Label>Name</Form.Label>
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
                        <Form.Label>Extraction Method</Form.Label>
                        <Form.Control
                            type="text"
                            value={CoffeePotData.extraction}
                            name='extraction'
                            placeholder="Extraction Method"
                            onChange={handleInputChange} />

                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3" controlId="barPressureField">
                        <Form.Label>Bar Pressure</Form.Label>
                        <Form.Control
                            type="text"
                            value={CoffeePotData.barPressure}
                            name='barPressure'
                            placeholder="Bar Pressure"
                            onChange={handleInputChange} />

                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="imagenField">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    type="text"
                    value={CoffeePotData.imagen}
                    name='imagen'
                    placeholder="Image URL"
                    onChange={handleInputChange} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="descriptionField">
                <InputGroup>
                    <Form.Control
                        as="textarea"
                        value={CoffeePotData.description}
                        name='description'
                        aria-label="With textarea"
                        placeholder='Description'
                        onChange={handleInputChange} />

                </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form >
    )
}

export default EditCoffeePotForm