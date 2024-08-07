import { Container, Row, Col } from "react-bootstrap"
import './CoffeeSelectorPage.css'
import CoffeePotsList from "../../components/CoffeePots/CoffeePotsList/CoffeePotsList";
import { useState } from "react";
import MainThreeCarouselSelector from "../../components/ThreeReact/MainThree";

const CoffeeSelectorPage = () => {
    const [switchViewer, setSwitchViewer] = useState(true)

    const ItsChecked = (checked) => {
        setSwitchViewer(checked)
    }

    return (
        <Container>
            <Row className="m-0">
                <Col className="mb-3">
                    <h1>Select a Coffee Pot to Receive Your Coffee Recommendations</h1>
                </Col>
                <Row>
                    <CoffeePotsList />
                </Row>
                <div style={{ pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh', margin: 0 }}>
                    <MainThreeCarouselSelector />
                </div>{' '}
            </Row >
        </Container >
    )
}

export default CoffeeSelectorPage