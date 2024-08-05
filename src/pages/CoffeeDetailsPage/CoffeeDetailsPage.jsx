import { Accordion, Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import testIMG from './../../assets/coffee-pots/test.jpg'
import { useEffect, useState } from "react"
import axios from "axios"
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
        <Container fluid className="bg-secondary m-0 p-5 flex-grow-1">
            <Row>
                <Col xs={{ span: 5 }} className="p-5 m-0 d-flex justify-content-center align-items-center">
                    <Card.Img variant="top" src={testIMG} className='img-fluid img-limited-height' />
                </Col>
                <Col xs={{ span: 7 }} className="p-5 m-0 d-flex justify-content-center flex-column">
                    <Card.Title>{coffee.name}</Card.Title>
                    <Card.Text>
                        {coffee.cata_notes}
                    </Card.Text>
                </Col>
            </Row>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Description</Accordion.Header>
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
                            <>
                                <p>No pack options available.</p>
                            </>
                        ) : (
                            <>
                                {
                                    coffee.pack.map(((elm, idx) => {
                                        return (<p key={idx}>{elm.grames} grams with a price of {elm.price}$</p>)
                                    }))
                                }
                            </>
                        )}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>

    )
}

export default CoffeeDetailsPage