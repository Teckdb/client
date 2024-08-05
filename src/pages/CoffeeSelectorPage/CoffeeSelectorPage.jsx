import { Button, Col, Container, Row, } from "react-bootstrap"
import './CoffeeSelectorPage.css'
import CoffeePotSelector from "../../components/CoffeePots/CoffeePotSelector/CoffeePotSelector";
import CoffeePotsList from "../../components/CoffeePots/CoffeePotsList/CoffeePotsList";

const CoffeeSelectorPage = () => {
    return (
        <Container fluid className="bg-secondary m-0 p-5 flex-grow-1 d-flex justify-content-center align-items-center">
            <Row className="w-100 m-0 p-0 ">
                <CoffeePotsList />
            </Row>
        </Container>
    )
}

export default CoffeeSelectorPage