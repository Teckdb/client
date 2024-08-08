import { Col, Container, Row } from "react-bootstrap"
import AddNewCoffeePotForm from "../../components/CoffeePots/AddNewCoffeePotForm/AddNewCoffeePotForm"
import AddNewCoffeeForm from "../../components/Coffee/AddNewCoffeeForm/AddNewCoffeeForm"
import TabAdmin from "../../components/TabAdmin/TabAdmin"

const adminPage = () => {
    return (
        <Container>
            <TabAdmin />
            <h1 className="mt-5">Admin Page</h1>
            <Row>
                <Col className="p-5">
                    <AddNewCoffeeForm />
                </Col>
                <Col className="p-5">
                    <AddNewCoffeePotForm />
                </Col>
            </Row>
        </Container>
    )
}

export default adminPage