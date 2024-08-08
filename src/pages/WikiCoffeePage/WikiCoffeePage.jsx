import "./WikiCoffePage.css"
import { Col, Container, Row } from "react-bootstrap"
import PreparationsMethods from "../../components/WikiCoffee/PreparationMethods/PreparationMethods"
import TipsSeption from '../../components/WikiCoffee/TipsSection/TipsSection'

const WikiCoffeePage = () => {
    return (
        <Container className="m-5">
            <Row>
                <Col md={{ span: 4 }}>
                    <PreparationsMethods />
                </Col>
                <Col md={{ span: 8 }}>
                    <TipsSeption />
                </Col>
            </Row>
        </Container>
    )
}

export default WikiCoffeePage