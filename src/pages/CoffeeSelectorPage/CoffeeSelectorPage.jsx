import { Button, Col, Container, Row, } from "react-bootstrap"
import './CoffeeSelectorPage.css'
import CoffeePotCard from "../../components/CoffeePots/CoffeePotCard/CoffeePotCard";
import CoffeePotSelector from "../../components/CoffeePots/CoffeePotSelector/CoffeePotSelector";

const CoffeeSelectorPage = () => {
    return (
        <Container fluid className="bg-secondary m-0 p-0 flex-grow-1 text-white d-flex justify-content-center align-items-center">
            <Row className="w-100 m-0 p-0 ">
                <Col sm={8} className="select bg-primary justify-content-center align-items-center">
                    <CoffeePotCard />
                </Col>
                <Col sm={4} className="">
                    <CoffeePotSelector />
                </Col>
            </Row>
        </Container>
    )
}

export default CoffeeSelectorPage