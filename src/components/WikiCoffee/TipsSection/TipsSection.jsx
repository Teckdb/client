
import { Container, Row, Col, Stack, Badge, Image, Card, Nav, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { COFFEEINSPIRATION_IMG_1 } from "../../../conts/imageData"

const TipsSection = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Stack direction="horizontal" gap={2}>
                        <Badge bg="dark mb-3">Coffee Tips</Badge>
                    </Stack>
                    <Image src={COFFEEINSPIRATION_IMG_1} thumbnail />
                    <Card>
                        <Card.Header>
                            <Nav variant="tabs" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first">Coffe Picts</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link">Coffee Recipes</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#disabled" disabled>
                                        Coffee Hub
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Lets talk about coffee life style</Card.Title>
                            <Card.Text>
                                Click on the button and discover Inspiration and stuff about coffee
                            </Card.Text>
                            <Button as={Link} to='https://www.instagram.com/cafesclandestino/?igsh=MTdxbzh3M3EybXBxag%3D%3D' variant="primary">See More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default TipsSection 