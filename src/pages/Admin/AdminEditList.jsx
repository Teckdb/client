import { Col, Row } from "react-bootstrap"
import TabAdmin from "../../components/TabAdmin/TabAdmin"

import CoffeeListForAdmin from "../../components/Coffee/CoffeeList/CoffeeListForAdmin"
import CoffeePotsListForAdmin from "../../components/CoffeePots/CoffeePotsList/CoffeePotsListForAdmin"

const AdminEditList = () => {


    return (
        <>
            <TabAdmin />
            <Row className="bg-white">
                <Col>
                    <h1>Admin Edit Page</h1>
                </Col>
            </Row>
            <Row className="bg-white">
                <Col>
                    <h2>List of Coffee Products</h2>
                    <CoffeeListForAdmin />
                </Col>
                <Col>
                    <h2>List of CoffeePots Products</h2>
                    <CoffeePotsListForAdmin />
                </Col>
            </Row>
        </>


    )
}

export default AdminEditList