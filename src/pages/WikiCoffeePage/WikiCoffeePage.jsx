import "./WikiCoffePage.css"
import { CardBody, Col, Container, Row } from "react-bootstrap"


const WikiCoffeePage = () => {
    return (
        <Container fluid className="bg-secondary m-0 flex-grow-1 text-white d-flex justify-content-center align-items-center">
            <Row>
                <Col xxl>
                    <h1>Soy WikiCoffee</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default WikiCoffeePage