import { useParams } from "react-router-dom"
import { CardBody, Col, Container, Row } from "react-bootstrap"

const CoffeeDetails = () => {

    const { idTest } = useParams()

    return (
        <Container fluid className="bg-secondary m-0 flex-grow-1 text-white d-flex justify-content-center align-items-center">
            <Row>
                <Col xxl>
                    <h1>Coffe Details Page</h1>
                </Col>
            </Row>
        </Container>

    )
}

export default CoffeeDetails