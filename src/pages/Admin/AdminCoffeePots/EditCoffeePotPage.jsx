import { Col, Container, Row } from "react-bootstrap"
import EditCoffeePotForm from "../../../components/CoffeePots/EditCoffeePotForm/EditCoffeePotForm"

const EditCoffeePotPage = () => {


    return (
        <Container fluid className="bg-secondary m-0 flex-grow-1 d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                    <EditCoffeePotForm />
                </Col>
            </Row>
        </Container>

    )
}

export default EditCoffeePotPage