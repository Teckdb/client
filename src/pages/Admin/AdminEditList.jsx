import { Col, Container, Row } from "react-bootstrap"
import TabAdmin from "../../components/TabAdmin/TabAdmin"

import CoffeeListForAdmin from "../../components/Coffee/CoffeeList/CoffeeListForAdmin"
import CoffeePotsListForAdmin from "../../components/CoffeePots/CoffeePotsList/CoffeePotsListForAdmin"

const AdminEditList = () => {
    return (
        <Container>
            <TabAdmin />
            <h1 className="mt-5">Admin Edit Page</h1>
            <Row>
                <Col className="p-5">
                    <h2>List of Coffee Products</h2>
                    <CoffeeListForAdmin />
                </Col >
                <Col className="p-5">
                    <h2>List of CoffeePots Products</h2>
                    <CoffeePotsListForAdmin />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminEditList