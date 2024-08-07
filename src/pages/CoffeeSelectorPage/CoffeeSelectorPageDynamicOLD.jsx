import { Container, Row, Col } from "react-bootstrap"
import './CoffeeSelectorPage.css'
import Separator from "../../components/Shared/Separator/Separator";
import MainThreeCarouselSelector from "../../components/ThreeReact/MainThree";
import ButtonSwitchViewerSelector from "../../components/Shared/ButtonSwitchViewerSelector/ButtonSwitchViewerSelector";

const CoffeeSelectorPageDynamic = () => {
    return (
        <Container fluid className="bg-white m-0 p-5 flex-grow-1 d-flex justify-content-center align-items-center">
            <Row className="flex-colunm justify-content-center align-items-center">
                <Col><ButtonSwitchViewerSelector /></Col>
                <Col className="d-flex justify-content-center mt-5">
                    <h1>Select a Coffee Pot to Receive Your Coffee Recommendations</h1>
                </Col>
                <Separator />
            </Row>
            <div style={{ position: 'relative', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
                <MainThreeCarouselSelector />
            </div>
        </Container>
    )
}

export default CoffeeSelectorPageDynamic