import axios from 'axios'
import { Button, Col, Form, Row, Modal, FormGroup, FloatingLabel, FormFloating, FormControl, FormLabel } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const API_URL = 'http://localhost:5005'

const EditCoffeeForm = () => {

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

    const [grindingData, setGriding] = useState(
        [
            { grinding: '' }
        ]
    )

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchCoffeeData()
    }, [])

    const fetchCoffeeData = () => {
        axios
            .get(`${API_URL}/coffees/${id}`)
            .then(res => {
                setCoffeeData(res.data)
                setPackData(res.data.pack)
            })
            .catch(err => console.log(err))
    }

    const deleteCoffee = () => {
        axios
            .delete(`${API_URL}/coffees/${id}`)
            .then(res => navigate(`/admin`))
            .catch(err => console.log(err))
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        axios
            .put(`${API_URL}/coffees/${id}`, coffeeData)
            .then(res => alert("Coffee updated successfully"))
            .catch(err => console.log(err))
    }


    const handleInputChange = e => {
        const { value, name } = e.target
        setCoffeeData({ ...coffeeData, [name]: value })
    }

    const handlePackChange = (event, currentIndex) => {
        const { value, name } = event.target

        const packsCopy = [...packData]
        packsCopy[currentIndex][name] = value
    }



    const handleGridingChange = (event, currentIndex) => {
        const { value, name } = event.target

        const grindingCopy = [...grindingData]
        grindingCopy[currentIndex][name] = value

        setCoffeeData(grindingCopy)
    }

    const deleteCoffees = () => {
        setPackData([...packData, { grames: 0, price: o }])
    }



    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    return (
        <Form onSubmit={handleFormSubmit}>

            <FormLabel className='h1'>Edit Coffee</FormLabel>
            <hr></hr>
            <Row className='mb-3'>

                <FormGroup as={Col} className='mb-3' controlId='potIdField'>

                    <FloatingLabel
                        controlId='coffeePotIdField'
                        label='Coffee Pot Id'
                        className='mb-3'
                    >

                        <FormControl
                            type='number'
                            value={coffeeData.coffeePotId}
                            name='coffeePotId'
                            placeholder='Coffee Por Id'
                            onChange={handleInputChange} />
                    </FloatingLabel>

                </FormGroup>

                <FormGroup as={Col} className='mb-3' controlId='nameField'>

                    <FormFloating
                        controlId='nameField'
                        label='Name'
                        className='mb-3'
                    >

                        <FormControl
                            type='text'
                            value={coffeeData.name}
                            name='name'
                            placeholder='Coffee Name'
                            onChange={handleInputChange} />

                    </FormFloating>

                </FormGroup>
                <Col>

                    <FormGroup className='mb-3' controlId='available'>
                        <FloatingLabel
                            label='Available Coffees'
                            className='mb-3'
                        >
                            <Form.Select name='available' onChange={handleInputChange} value={coffeeData.available} >
                                <option value=''>Choose...</option>
                                <option value='true'>True</option>
                                <option value='false'>false</option>
                            </Form.Select>

                        </FloatingLabel>

                    </FormGroup>

                </Col>
            </Row>

            <Row>
                <Col>
                    <FormGroup as={Col} className='mb-3' controlId='imageField'>

                        <FloatingLabel
                            controlId='imageField'
                            label='Image'
                            className='mb-3'
                        >

                            <FormControl
                                type='text'
                                value={coffeeData.image}
                                name='image'
                                placeholder='Image'
                                onChange={handleInputChange} />
                        </FloatingLabel>

                    </FormGroup>

                </Col>

                <Col>

                    <FormGroup as={Col} className='mb-3' controlId='ratingField'>

                        <FloatingLabel
                            controlId='ratingField'
                            label='Rating'
                            className='mb-3'>

                            <FormControl
                                type='number'
                                value={coffeeData.rating}
                                name='rating'
                                placeholder='Rating'
                                onChange={handleInputChange} />

                        </FloatingLabel>

                    </FormGroup>

                </Col>
                <Col>

                    <FormGroup as={Col} className='mb-3' controlId='altitudeField'>

                        <FloatingLabel
                            controlId='altitudeField'
                            label='Altitude'
                            className='mb-3'
                        >

                            <FormControl
                                type='number'
                                value={coffeeData.altitude}
                                name='altitude'
                                placeholder='Altitude'
                                onChange={handleInputChange} />
                        </FloatingLabel>
                    </FormGroup>
                </Col>
            </Row>

            <Row>

                <Col>
                    <FormGroup as={Col} className='mb-3' controlId='varietyField'>
                        <FloatingLabel
                            controlId='varietyField'
                            label='Variety'
                            className='mb-3'
                        >
                            <FormControl
                                type='text'
                                value={coffeeData.variety}
                                name='Variety'
                                placeholder='Variety'
                                onChange={handleInputChange} />
                        </FloatingLabel>
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup as={Col} className='mb-3' controlId='processField'>

                        <FloatingLabel
                            controlId='processField'
                            label='Process'
                            className='mb-3'>

                            <FormControl
                                type='text'
                                value={coffeeData.process}
                                name='process'
                                placeholder='Process'
                                onChange={handleInputChange} />

                        </FloatingLabel>
                    </FormGroup>

                </Col>

                <Col>
                    <FormGroup as={Col} className='mb-3' controlId='cataNotesField'>

                        <FloatingLabel
                            controlId='cataNotesField'
                            label='Cata Notes'
                            className='mb-3'
                        >

                            <FormControl
                                type='text'
                                value={coffeeData.cataNotes}
                                name='cataNotes'
                                placeholder='Cata Notes'
                                onChange={handleInputChange} />

                        </FloatingLabel>
                    </FormGroup>
                </Col>
            </Row>

            <Row>

                <Col>
                    <FormGroup as={Col} className='mb-3' controlId='grindingField'>

                        <FloatingLabel
                            controlId='grindingField'
                            label='Grinding'
                            className='mb-3'
                        >
                            <Form.Select defaultValue='Choose...'>
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
                    <FormGroup as={Col} className='mb-3' controlId='descriptionField'>
                        <FloatingLabel
                            controlId='descriptionField'
                            label='Description'
                            className='mb-3'>

                            <FormControl
                                as='textarea'
                                row={10}
                                type='text'
                                value={coffeeData.description}
                                name='description'
                                arial-label='With textarea'
                                placeholder='Description'
                                onChange={handleInputChange}
                            />
                        </FloatingLabel>

                    </FormGroup>
                </Col>

            </Row>
            <Row>
                <Col sm={{ span: 6, offsetÇ: 0 }}>
                    <FormGroup>
                        <FormLabel>Option Packages</FormLabel>
                        <br></br>
                        {
                            packData.map((eachPack, idx) => {
                                return (
                                    <div key={idx}>
                                        <FormLabel>Pack {idx + 1}</FormLabel>

                                        <FormControl
                                            type='number'
                                            controlId='gramesField'
                                            onChange={e => handlePackChange(e, idx)}
                                            value={eachPack.grames}
                                            placeholder='Grames per pack'
                                            name='grames'
                                        />

                                        <FormControl
                                            type='number'
                                            controlId='priceField'
                                            onChange={e => handlePackChange(e, idx)}
                                            value={eachPack.price}
                                            placeholder='Price per pack'
                                            name='price'
                                        />

                                    </div>
                                )

                            })
                        }
                        <Button variant='dark' size='sm' onClick={deleteCoffee}>Delete Pack</Button>
                    </FormGroup>
                </Col>

            </Row>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Submit</Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >

                        < Modal.Header closeButton >
                            <Modal.Title>Confirm Deletion</Modal.Title>
                        </Modal.Header >
                        <Modal.Body>
                            Are you sure you want to delete this item? This action cannot be undone.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={deleteCoffee}>
                                Delete this item
                            </Button>
                        </Modal.Footer>
                    </Modal >
                    <Button variant='danger' onClick={handleShow} className='ms-3'>
                        Delete
                    </Button>

                </Col>
            </Form.Group>

        </Form>




    )

}
export default EditCoffeeForm