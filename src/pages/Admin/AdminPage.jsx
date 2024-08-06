import { Col, Container, Row } from "react-bootstrap"
import AddNewCoffeePotForm from "../../components/CoffeePots/AddNewCoffeePotForm/AddNewCoffeePotForm"
import AddNewCoffeeForm from "../../components/Coffee/AddNewCoffeeForm/AddNewCoffeeForm"

const adminPage = () => {


    return (
        <>
            <Row className="bg-white">
                <Col>
                    <h1>Admin Page</h1>
                </Col>
            </Row>
            <Row className="bg-white">
                <Col className="p-5">
                    <AddNewCoffeeForm />
                </Col>
                <Col className="p-5">
                    <AddNewCoffeePotForm />
                </Col>
            </Row>

        </>


    )
}

export default adminPage