import { Button, Col, Container, Row, } from "react-bootstrap"
import './CoffeeSelectorPage.css'
import Form from 'react-bootstrap/Form';

const CoffeeSelectorPage = () => {
    return (
        <Container fluid className="bg-secondary m-0 p-0 flex-grow-1 text-white d-flex justify-content-center align-items-center">
            <Row className="w-100 m-0 p-0">
                <Col sm={8} className="select bg-primary">
                    <h1>Soy Coffee Selector izquierda</h1>
                </Col>
                <Col sm={4} className="">
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Expresso Machine</option>
                        <option value="2">Drip Coffee Maker</option>
                        <option value="3">French Press</option>
                        <option value="4">Moka</option>
                        <option value="5">Pour-Over Coffee Maker</option>
                        <option value="6">Cold Brew Coffee Maker</option>
                        <option value="7">Aeropress</option>
                        <option value="8">Percolator</option>
                        <option value="9">Single-Serve Pod Coffee Maker</option>
                    </Form.Select>
                    <Button variant="info">Take it!</Button>{' '}

                </Col>
            </Row>
        </Container>
    )
}

export default CoffeeSelectorPage