import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap"
import './CoffeeSelectorPage.css'
import CoffeePotsList from "../../components/CoffeePots/CoffeePotsList/CoffeePotsList";
import MainThreeCarouselSelector from "../../components/ThreeReact/MainThree";

const CoffeeSelectorPage = () => {

    return (
        <ListGroup>
            <Row >
                <Col className="d-flex justify-content-center mt-5 mb-5">
                    <h1>Select Your Coffee Maker to Get Personalized Coffee Recommendations</h1>
                </Col>
            </Row>
            <ListGroupItem >
                <Row className="d-flex justify-content-center align-items-center">
                    <CoffeePotsList />
                </Row>
            </ListGroupItem>
            <div style={{ pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh', margin: 0 }}>
                <MainThreeCarouselSelector />
            </div>
        </ListGroup>
    )
}

export default CoffeeSelectorPage