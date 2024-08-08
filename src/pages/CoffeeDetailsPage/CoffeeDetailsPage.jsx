import { Accordion, Card, CardSubtitle, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import LocationMap from "../../components/LocationMap/LocationMap"
import { API_URL } from './../../conts/apiEndpoints'

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
                <Col xs={{ span: 5 }} className="p-1 m-0 d-flex justify-content-center align-items-center ">
                    <Card.Img variant="top" src={coffee.image} className='img-fluid img-limited-height' />
                </Col>
                <Col xs={{ span: 7 }} className="p-5 m-0 d-flex justify-content-center flex-column">
                    <Card.Title className="custom-coffee-card-details mb-4"><h2>{coffee.name}</h2></Card.Title>
                    <Card.Text className="custom-coffee-card-details">
                        <strong>Cata Notes:</strong> {coffee.cata_notes}
                    </Card.Text>
                    <br></br>
                    <CardSubtitle >
                        <strong>Variety:</strong> {coffee.variety}
                    </CardSubtitle>
                    <br></br>
                    <CardSubtitle className="custom-coffee-card-details">
                        <strong>Process:</strong> {coffee.process}
                    </CardSubtitle>
                    <br></br>
                    <CardSubtitle>
                        <strong>Altitude:</strong> {coffee.altitude}
                    </CardSubtitle>
                    <br></br>
                    <CardSubtitle>
                        <strong>Rating:</strong> {coffee.rating} SCA
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
                    <Accordion.Header>Pack Options</Accordion.Header>
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
        </Container >
    )
}

export default CoffeeDetailsPage