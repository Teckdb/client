import { Col, Row } from "react-bootstrap"
import AddNewCoffeePotForm from "../../components/CoffeePots/AddNewCoffeePotForm/AddNewCoffeePotForm"
import AddNewCoffeeForm from "../../components/Coffee/AddNewCoffeeForm/AddNewCoffeeForm"
import TabAdmin from "../../components/TabAdmin/TabAdmin"


const adminPage = () => {


    return (
        <>
            <TabAdmin />
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