import axios from 'axios'
import { useState } from 'react'
import { Button, Col, Collapse, FloatingLabel, Form, FormControl, FormGroup, FormLabel, Row, InputGroup } from 'react-bootstrap'

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

    const [packData, setPackData] = useState(
        [
            { grames: 0, price: 0 }
        ]
    )




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

    const addNewCoffee = () => {
        setPackData([...packData, { grames: 0, price: 0 }])
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        const newCoffee = {
            coffeePotId: coffeeData.coffeePotId,
            name: coffeeData.name,
            available: coffeeData.available,
            pack: packData,
            image: coffeeData.image,
            rating: coffeeData.rating,
            altitude: coffeeData.altitude,
            variety: coffeeData.variety,
            process: coffeeData.process,
            cataNotes: coffeeData.cataNotes,
            grinding: coffeeData.grinding,
            description: coffeeData.description
        }

        axios
            .post(`${API_URL}/coffees`, newCoffee)
            .then(alert("send!"))
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
                        label='name'
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
                            controlId='available'
                            label='Available Coffees'
                            className='mb-3'
                        >

                            <Form.Select defaultValue="Choose...">
                                <option>True</option>
                                <option>False</option>
                                value={coffeeData.available}
                                onChange={handleInputChange}
                            </Form.Select>

                        </FloatingLabel>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <FormLabel>Option Packages</FormLabel>
                        <br></br>
                        {
                            packData.map((eachPack, idx) => {

                                return (
                                    <div key={idx}>
                                        <FormLabel>Pack {idx + 1}</FormLabel>

                                        <FormControl
                                            type='text'
                                            onChange={e => handlePackChange(e, idx)}
                                            value={packData[idx].grames}
                                            placeholder='Grames per pack'
                                            name='grames'
                                        />

                                        <FormControl
                                            type='text'
                                            onChange={e => handlePackChange(e, idx)}
                                            value={packData[idx].price}
                                            placeholder='Price per pack'
                                            name='price'
                                        />

                                    </div>
                                )


                            })

                        }
                        <Button variant='dark' size='sm' onClick={addNewCoffee}>New Coffee</Button>
                    </FormGroup>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign in</Button>

                        </Col>
                    </Form.Group>


                </Col>
            </Row>

        </Form >


    );


}

export default AddNewCoffeeForm

