import { Accordion, Card, CardSubtitle, Col, Container, Row, Button, InputGroup, Form } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import LocationMap from "../../components/LocationMap/LocationMap"
const API_URL = 'http://localhost:5005'

const CoffeeDetailsPage = () => {

    const { id } = useParams()

    const [coffee, setCoffee] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchCoffe()
    }, [])

    const fetchCoffe = () => {
        axios
            .get(`${API_URL}/coffees/${id}`)
            .then((res) => {
                setCoffee(res.data)
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }

    return (
        <Container fluid className=" m-0 p-5 flex-grow-1">
            <Row>
                <Col xs={{ span: 5 }} className="p-5 m-0 d-flex justify-content-center align-items-center">
                    <Card.Img variant="top" src={coffee.image} className='img-fluid img-limited-height' />
                </Col>
                <Col xs={{ span: 7 }} className="p-5 m-0 d-flex justify-content-center flex-column">
                    <Card.Title className="custom-coffee-card-details mb-4"><h2>{coffee.name}</h2></Card.Title>
                    <Card.Text className="custom-coffee-card-details">
                        <h5 className="custom-coffee-card-subtile"><strong>Cata Notes:</strong> {coffee.cata_notes}</h5>
                    </Card.Text>
                    <br></br>
                    <CardSubtitle >
                        <h5 className="custom-coffee-card-details-subtitle"><strong>Variety:</strong> {coffee.variety}</h5>
                    </CardSubtitle>
                    <br></br>
                    <CardSubtitle className="custom-coffee-card-details">
                        <h5 className="custom-coffee-card-details-subtitle"><strong>Process:</strong> {coffee.process}</h5>
                    </CardSubtitle>
                    <br></br>
                    <CardSubtitle>
                        <h5 className="custom-coffee-card-details-subtitle"><strong>Altitude:</strong> {coffee.altitude} metres</h5>
                    </CardSubtitle>
                    <br></br>
                    <CardSubtitle>
                        <h5 className="custom-coffee-card-details-subtitle mb-5"><strong>Rating:</strong> {coffee.rating} SCA</h5>
                        <Button variant="primary" size="lg">Add to Cart</Button>{' '}
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                    </CardSubtitle>


                </Col>
            </Row>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>Description</h5></Accordion.Header>
                    <Accordion.Body>
                        <p>{coffee.description}</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>Pack Options</h5></Accordion.Header>
                    <Accordion.Body>
                        {loading ? (
                            <p>No pack options available.</p>
                        ) : (
                            coffee.pack.map(((elm, idx) => {
                                return (<p key={idx}><strong>{elm.grames}</strong> grams with a price of <strong>{elm.price}$</strong></p>)
                            }))
                        )}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>Location</h5></Accordion.Header>
                    <Accordion.Body>
                        {
                            loading ? <p>No pack options available.</p> : <LocationMap location={coffee.location} />
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default CoffeeDetailsPage