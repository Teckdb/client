import { Container, Row, Col, Stack, Badge, Card, ListGroup } from "react-bootstrap"
import { COFFEEPREPARATION_IMG_1 } from "../../../conts/imageData"

const PreparationsMethods = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Stack direction="horizontal" gap={2}>
                        <Badge bg="dark mb-3">Coffee Preparations</Badge>
                    </Stack>

                    <Card className="mb-5">
                        <Card.Img variant="top" src={COFFEEPREPARATION_IMG_1} />
                        <Card.Body>
                            <Card.Title>Aeropress Brewing</Card.Title>
                            <Card.Text>
                                Brewing coffee with an AeroPress is a simple yet versatile process that allows for different brewing techniques.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Preparation</ListGroup.Item>
                            <ListGroup.Item>Adding Coffee and Water</ListGroup.Item>
                            <ListGroup.Item>Brewing</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">See Article</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}

export default PreparationsMethods