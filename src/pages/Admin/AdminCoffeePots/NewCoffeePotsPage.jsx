import { Col, Container, Row } from "react-bootstrap"
import AddNewCoffeePotForm from "../../../components/CoffeePots/AddNewCoffeePotForm/AddNewCoffeePotForm"

const AdminCoffeesPotsPage = () => {


    return (
        <Container fluid className="bg-secondary m-0 flex-grow-1 text-white d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                    <AddNewCoffeePotForm />
                </Col>
            </Row>
        </Container>

    )
}

export default AdminCoffeesPotsPage