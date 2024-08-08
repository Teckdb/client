import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import CoffeeList from "../../components/Coffee/CoffeeList/CoffeeList"
import axios from "axios"
import { useEffect, useState } from "react"
const API_URL = 'http://localhost:5005'

const CoffeeResultsPage = () => {

    const { potId } = useParams()

    const [coffeePot, setCoffeePot] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchCoffeePot()
    }, [])

    const fetchCoffeePot = () => {
        axios
            .get(`${API_URL}/coffeePots/?potId=${potId}`)
            .then(res => {
                setCoffeePot(res.data)
                setLoading(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <ListGroup>
            <Row >
                <Col className="d-flex justify-content-center mt-5">
                    {
                        loading ?
                            (<h1>This is our selection for {coffeePot[0].name}</h1>)
                            :
                            (<>Loading...</>)
                    }
                </Col>
            </Row>
            <ListGroupItem >
                <Row className="d-flex justify-content-center align-items-center">
                    <CoffeeList potId={potId} />
                </Row>
            </ListGroupItem>
        </ListGroup>
    )
}

export default CoffeeResultsPage