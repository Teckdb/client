import axios from 'axios'
import { useState } from 'react'
import { Button, Col, FloatingLabel, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'

const API_URL = 'http://localhost:5005'

const AddNewCoffeeForm = () => {
    const [coffeeData, setCoffeeData] = useState({
        coffeePotId: 0,
        name: '',
        available: '',
        image: '',
        rating: 0,
        altitude: 0,
        variety: '',
        process: '',
        cataNotes: '',
        grinding: '',
        description: ''
    })

    const [packData, setPackData] = useState([{
        grames: '',
        price: ''
    }])

    const [grindingData, setGriding] = useState([{
        grinding: ''
    }])

    const handleInputChange = e => {
        const { value, name } = e.target
        setCoffeeData({ ...coffeeData, [name]: value })
    }

    const handlePackChange = (event, currentIndex) => {
        const { value, name } = event.target

        const packsCopy = [...packData]
        packsCopy[currentIndex][name] = value

        setPackData(packsCopy)
    }

    const addNewPack = () => {
        setPackData([...packData, { grames: 0, price: 0 }])
    }

    const removeLastPack = () => {
        setPackData(packData.slice(0, -1));
    };

    const handleFormSubmit = e => {
        e.preventDefault()

        const newCoffee = {
            ...coffeeData,
            pack: packData,
        }

        axios
            .post(`${API_URL}/coffees`, newCoffee)
            .then(() => alert("send!"))
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleFormSubmit}>

            <FormLabel className="h1">New coffee</FormLabel>
            <hr></hr>
            <Row className="mb-3">

                <FormGroup as={Col} className="mb-3" controlId="potIdField">

                    <FloatingLabel
                        controlId="coffeePotIdField"
                        label="Coffee Pot Id"
                        className="mb-3"
                    >

                        <Form.Control
                            type="number"
                            value={coffeeData.coffeePotId}
                            name="coffeePotId"
                            placeholder='Coffee Pot Id'
                            onChange={handleInputChange} />

                    </FloatingLabel>
                </FormGroup>

                <FormGroup as={Col} className='mb-3' controlId='nameField' >

                    <FloatingLabel
                        controlId='nameField'
                        label='Name'
                        className='mb-3'
                    >

                        <Form.Control
                            type="text"
                            value={coffeeData.name}
                            name="name"
                            placeholder='Coffee name'
                            onChange={handleInputChange} />
                    </FloatingLabel>
                </FormGroup>
                <Col>
                    <FormGroup className='mb-3' controlId='available'>

                        <FloatingLabel
                            label='Available Coffees'
                            className='mb-3'

                        >

                            <Form.Select name="available" onChange={handleInputChange} value={coffeeData.available}>
                                <option value="">Choose...</option>
                                <option value="true" >True</option>
                                <option value="false">False</option>

                            </Form.Select>

                        </FloatingLabel>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup as={Col} className="mb-3" controlId="imageField">

                        <FloatingLabel
                            controlId="imageIdField"
                            label="Image"
                            className="mb-3"
                        >

                            <Form.Control
                                type="text"
                                value={coffeeData.image}
                                name="image"
                                placeholder='Image'
                                onChange={handleInputChange} />

                        </FloatingLabel>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup as={Col} className="mb-3" controlId="ratingField">

                        <FloatingLabel
                            controlId="ratingField"
                            label="Rating"
                            className="mb-3"
                        >

                            <Form.Control
                                type="number"
                                value={coffeeData.rating}
                                name="rating"
                                placeholder='Rating'
                                onChange={handleInputChange} />

                        </FloatingLabel>
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup as={Col} className="mb-3" controlId="altitudeField">

                        <FloatingLabel
                            controlId="altitudeField"
                            label="Altitude"
                            className="mb-3"
                        >

                            <Form.Control
                                type="number"
                                value={coffeeData.altitude}
                                name="altitude"
                                placeholder='Altitude'
                                onChange={handleInputChange} />

                        </FloatingLabel>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup as={Col} className="mb-3" controlId="varietyField">

                        <FloatingLabel
                            controlId="varityField"
                            label="Variety"
                            className="mb-3"
                        >

                            <Form.Control
                                type="text"
                                value={coffeeData.variety}
                                name="variety"
                                placeholder='Variety'
                                onChange={handleInputChange} />

                        </FloatingLabel>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup as={Col} className="mb-3" controlId="processField">

                        <FloatingLabel
                            controlId="processField"
                            label="Process"
                            className="mb-3"
                        >

                            <Form.Control
                                type="text"
                                value={coffeeData.process}
                                name="process"
                                placeholder='Process'
                                onChange={handleInputChange} />

                        </FloatingLabel>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup as={Col} className="mb-3" controlId="cataNotesField">

                        <FloatingLabel
                            controlId="cataNotesField"
                            label="Cata Notes"
                            className="mb-3"
                        >

                            <Form.Control
                                type="text"
                                value={coffeeData.cataNotes}
                                name="cataNotes"
                                placeholder='Cata Notes'
                                onChange={handleInputChange} />

                        </FloatingLabel>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup as={Col} className="mb-3" controlId="gridingField">

                        <FloatingLabel
                            controlId="gridingField"
                            label="Griding"
                            className="mb-3"
                        >

                            <Form.Select defaultValue="Choose...">
                                <option>Fine Grind</option>
                                <option>Medium Grind</option>
                                <option>Course Grind</option>
                                value={coffeeData.grinding}
                                onChange={handleInputChange}
                            </Form.Select>

                        </FloatingLabel>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup as={Col} className="mb-3" controlId="descriptionField">

                        <FloatingLabel
                            controlId="descriptionField"
                            label="Description"
                            className="mb-3"
                        >

                            <Form.Control
                                as="textarea"
                                row={10}
                                type="text"
                                value={coffeeData.description}
                                name="description"
                                aria-label='With textarea'
                                placeholder='Description'
                                onChange={handleInputChange} />

                        </FloatingLabel>
                    </FormGroup>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col sm={{ span: 6, offset: 0 }}>
                    <FormGroup>
                        <FormLabel className='mb-5'>Option Packages</FormLabel>
                        <br></br>

                        {
                            packData.map((eachPack, idx) => {

                                return (
                                    <div key={idx}>
                                        <FormLabel className='mb-3'>Pack {idx + 1}</FormLabel>
                                        <FormControl
                                            type='text'
                                            onChange={e => handlePackChange(e, idx)}
                                            value={packData[idx].grames}
                                            placeholder='Grames per pack'
                                            name='grames'
                                            className='mb-3'
                                        />

                                        <FormControl
                                            type='text'
                                            onChange={e => handlePackChange(e, idx)}
                                            value={packData[idx].price}
                                            placeholder='Price per pack'
                                            name='price'
                                            className='mb-3'
                                        />
                                    </div>
                                )
                            })
                        }
                        <Button variant='dark' size='sm' onClick={addNewPack} className='me-2'>New Pack</Button>
                        <Button variant='dark' size='sm' onClick={removeLastPack}>Remove Pack</Button>
                    </FormGroup>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Button type="submit">Submit</Button>
            </Row>
        </Form >
    )
}

export default AddNewCoffeeForm