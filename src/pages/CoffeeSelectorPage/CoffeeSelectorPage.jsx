import { Container, Row, Col } from "react-bootstrap"
import './CoffeeSelectorPage.css'
import CoffeePotsList from "../../components/CoffeePots/CoffeePotsList/CoffeePotsList";
import Separator from "../../components/Shared/Separator/Separator";
import ButtonSwitchViewerSelector from "../../components/Shared/ButtonSwitchViewerSelector/ButtonSwitchViewerSelector";
import { useState } from "react";
import MainThreeCarouselSelector from "../../components/ThreeReact/MainThree";

const CoffeeSelectorPage = () => {

    const [switchViewer, setSwitchViewer] = useState(true)

    const ItsChecked = (checked) => {
        setSwitchViewer(checked)
    }

    return (
        <Container fluid className="bg-white m-0 p-5 flex-grow-1 d-flex justify-content-center align-items-center">


            <Row className="flex-colunm justify-content-center align-items-center">
                <Col><ButtonSwitchViewerSelector ItsChecked={ItsChecked} /></Col>
                <Col className="d-flex justify-content-center mt-5">
                    <h1>Select a Coffee Pot to Receive Your Coffee Recommendations</h1>
                </Col>
                <Separator />
                {switchViewer ? <CoffeePotsList /> :
                    <div style={{ position: 'relative', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh', borderRadius: '50px' }}>
                        <MainThreeCarouselSelector />
                    </div>}

            </Row>
        </Container>
    )
}

export default CoffeeSelectorPage