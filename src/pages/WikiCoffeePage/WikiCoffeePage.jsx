import "./WikiCoffePage.css"
import { CardBody, Col, Container, Row, Card, ListGroup, Image, Ratio, Badge, Stack } from "react-bootstrap"



const WikiCoffeePage = () => {
    return (
        <Container>
            <Row>

                <Col md={{ span: 3 }}>
                    <Stack direction="horizontal" gap={2}>
                        <Badge bg="dark">Curiosities about Coffee</Badge>
                    </Stack>
                    <Card className="mb-5">
                        <Card.Img variant="top" src="src/assets/roaster-at-local-coffee-business.jpg" />
                        <Card.Body>
                            <Card.Title>Coffee Roasting</Card.Title>
                            <Card.Text>
                                Coffee roasting transforms green beans into aromatic, flavorful coffee through controlled heat application.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>FairTrade</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">See Article</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={{ span: 6 }}>
                    <Stack direction="horizontal" gap={2}>
                        <Badge bg="dark">Coffee Inspiration</Badge>
                    </Stack>
                    <Image src="src/assets/lenses-lattes.jpg" thumbnail />
                    <Ratio aspectRatio="16x9">
                        <iframe
                            src="src/assets/CAFE CLANDESTINO.mov"
                            title="YouTube video"
                            allowFullScreen>
                        </iframe>
                    </Ratio>
                </Col>

                <Col md={{ span: 3 }}>
                    <Stack direction="horizontal" gap={2}>
                        <Badge bg="dark">Coffee Preparations</Badge>
                    </Stack>

                    <Card className="mb-5">
                        <Card.Img variant="top" src="src/assets/coffee-press-into-crystal.jpg" />
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
                <Col md={{ span: 4 }}>
                    <Card className="mb-5">
                        <Card.Img variant="top" src="src/assets/freshly-picked-coffee-beans.jpg" />
                        <Card.Body>
                            <Card.Title>Coffee Beans</Card.Title>
                            <Card.Text>
                                Selecting high-quality coffee beans involves several key considerations:
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Bean Type</ListGroup.Item>
                            <ListGroup.Item>Freshness</ListGroup.Item>
                            <ListGroup.Item>Origin</ListGroup.Item>
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

export default WikiCoffeePage