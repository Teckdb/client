import axios from 'axios'
import { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const API_URL = 'http://localhost:5005'

const AddNewCoffeeForm = () => {

    const [coffeeData, setCoffeeData] = useState({
        coffeePotId: 0,
        name: '',
        available: true,
        stock: 0,
        pack: '',
        grames: 0,
        price: 0,
        image: '',
        rating: 0,
        altitude: 0,
        variety: '',
        process: '',
        cataNotes: '',
        grinding: '',
        description: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target

        if (['grames', 'price'].includes(name)) {
            setCoffeeData({
                ...coffeeData, pack: { ...coffeeData.pack, [name]: value }
            })
        } else {
            setCoffeeData({ ...coffeeData, [name]: value })
        }

    }

    const handleFormSubmit = e => {
        e.preventDefault()

        const newCoffee = {
            coffeePotId: coffeeData.coffeePotId,
            name: coffeeData.name,
            available: coffeeData.available,
            stock: coffeeData.stock,
            pack: coffeeData.pack.grames,
            grames: coffeeData.pack,
            price: coffeeData.price,
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

            <Form.Group as={Row} className="mb-3" controlId="coffeePotIdField">
                <Form.Label column sm={2}> CoffeePotId </Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" value={coffeeData.coffeePotId} onChange={handleInputChange} name="coffeePotId" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="nameField">
                <Form.Label column sm={2}> Name </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={coffeeData.name} onChange={handleInputChange} name="name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="availableField">
                <Form.Label column sm={2}> Available </Form.Label>
                <Col sm={10}>
                    <Form.Control type="boolean" value={coffeeData.available} onChange={handleInputChange} name="available" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="packField">
                <Form.Label column sm={2}> Pack </Form.Label>
            </Form.Group>


            <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                    Grames
                </Form.Label>
                <Col sm={10}>
                    <Form.Check
                        type="radio"
                        label="250gr"
                        name="grames"
                        value={250}
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        type="radio"
                        label="500gr"
                        name="grames"
                        value={500}
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        type="radio"
                        label="1kg"
                        name="grames"
                        value={1000}
                        onChange={handleInputChange}
                    />
                </Col>
            </Form.Group>



            <Form.Group as={Row} className="mb-3" controlId="priceField">
                <Form.Label column sm={2}> Price </Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" value={coffeeData.price} onChange={handleInputChange} name="price" />
                </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3" controlId="imageField">
                <Form.Label column sm={2}> Image </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={coffeeData.image} onChange={handleInputChange} name="image" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="ratingField">
                <Form.Label column sm={2}> Rating </Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" value={coffeeData.rating} onChange={handleInputChange} name="rating" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="altitudeField">
                <Form.Label column sm={2}> Altitude </Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" value={coffeeData.altitude} onChange={handleInputChange} name="altitude" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="varietyField">
                <Form.Label column sm={2}> Variety </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={coffeeData.variety} onChange={handleInputChange} name="variety" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="processField">
                <Form.Label column sm={2}> Process </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={coffeeData.process} onChange={handleInputChange} name="process" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="cataNotesField">
                <Form.Label column sm={2}> Cata notes </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={coffeeData.cataNotes} onChange={handleInputChange} name="cataNotes" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="gridingField">
                <Form.Label column sm={2}> Grinding </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={coffeeData.grinding} onChange={handleInputChange} name="grinding" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="descriptionField">
                <Form.Label column sm={2}> Description </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={coffeeData.description} onChange={handleInputChange} name="description" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Sign in</Button>

                </Col>
            </Form.Group>

        </Form>

    );
}

export default AddNewCoffeeForm

