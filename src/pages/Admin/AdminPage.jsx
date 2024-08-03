import { Col, Container, Row } from "react-bootstrap"
import CoffeeList from "../../components/Coffee/CoffeeList/CoffeeList"

const adminPage = () => {


    return (
        <Container fluid className="bg-secondary m-0 flex-grow-1 text-white d-flex justify-content-center align-items-center">
            <Row>
                <Col xxl>
                    <h1>Admin Page</h1>
                    <CoffeeList />
                </Col>
            </Row>
        </Container>

    )
}

export default adminPage