import { Col, Container, Row } from "react-bootstrap"
import AddNewCoffeeForm from "../../../components/Coffee/AddNewCoffeeForm/AddNewCoffeeForm"

const AdminCoffeesPage = () => {


    return (
        <Container fluid className="bg-secondary m-0 flex-grow-1 d-flex justify-content-center align-items-center">
            <Row>
                <Col xxl>
                    <h1>New Coffee Item</h1>
                </Col>
                <AddNewCoffeeForm />
            </Row>
        </Container>

    )
}

export default AdminCoffeesPage