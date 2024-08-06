import { Col, Row } from "react-bootstrap"
import EditCoffeeForm from "../../../components/Coffee/EditCoffeeForm/EditCoffeeForm"
import TabAdmin from './../../../components/TabAdmin/TabAdmin'


const EditCoffeePage = () => {

    return (
        <>
            <TabAdmin />
            <Row className="bg-white">
                <Col>
                    <h1>Admin Page</h1>
                </Col>
            </Row>
            <EditCoffeeForm />
        </>

    )
}

export default EditCoffeePage