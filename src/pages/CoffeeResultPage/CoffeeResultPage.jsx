import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import CoffeeList from "../../components/Coffee/CoffeeList/CoffeeList"
import axios from "axios"
import { useEffect, useState } from "react"
const API_URL = 'http://localhost:5005'

const CoffeeResultPage = () => {

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
        <Container fluid className="bg-white text-black">
            <Row>
                <Col className="p-5 d-flex justify-content-center align-items-center">
                    <h1>
                        {
                            loading ?
                                (<>This is our selection for {coffeePot[0].name}</>)
                                :
                                (<>Loading...</>)
                        }
                    </h1>
                </Col>
            </Row>
            <Row>
                <CoffeeList />
            </Row>
        </Container>
    )
}

export default CoffeeResultPage