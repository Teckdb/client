import "./WikiCoffePage.css"
import PreparationsMethods from "../../components/WikiCoffee/PreparationMethods/PreparationMethods"
import { COFFEEINSPIRATION_IMG_1, COFFEEPREPARATION_IMG_1, CURIOSITIESABOUTCOFFEE_IMG_1, CURIOSITIESABOUTCOFFEE_IMG_2 } from "../../conts/imageData"
import { Col, Container, Row, Card, ListGroup, Image, Ratio, Badge, Stack } from "react-bootstrap"
import CoffeeCollection from "../../components/WikiCoffee/CoffeeCollection/CoffeeCollection"
import TipsSeption from '../../components/WikiCoffee/TipsSection/TipsSection'

const WikiCoffeePage = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 4 }}>
                    <PreparationsMethods />
                </Col>
                <Col md={{ span: 8 }}>
                    <TipsSeption />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 8 }}>
                    <CoffeeCollection />
                </Col>
            </Row>
        </Container>
    )
}

export default WikiCoffeePage