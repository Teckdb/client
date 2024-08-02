import { Col, Container, Row } from "react-bootstrap"
import CoffeeCard from "../../components/Coffee/CoffeeCard/CoffeeCard"

const CoffeeResultPage = () => {
    return (
        <Container fluid className="bg-secondary m-0 flex-grow-1 text-white d-flex justify-content-center align-items-center">
            <Row>

                <Col xxl>
                    <h1>Soy CoffeeResult Page</h1>
                </Col>

                <CoffeeCard />


            </Row>
        </Container>
    )
}

export default CoffeeResultPage