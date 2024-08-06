import { Container, Row, Col } from "react-bootstrap"
import './CoffeeSelectorPage.css'
import CoffeePotsList from "../../components/CoffeePots/CoffeePotsList/CoffeePotsList";
import Separator from "../../components/Shared/Separator/Separator";

const CoffeeSelectorPage = () => {
    return (
        <Container fluid className="bg-white m-0 p-5 flex-grow-1 d-flex justify-content-center align-items-center">
            <Row className="flex-colunm justify-content-center align-items-center">
                <Col className="d-flex justify-content-center mt-5">
                    <h1>Select a Coffee Pot to Receive Your Coffee Recommendations</h1>
                </Col>
                <Separator />
                <CoffeePotsList />
            </Row>
        </Container>
    )
}

export default CoffeeSelectorPage