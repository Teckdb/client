import "./WikiCoffePage.css"
import { CardBody, Col, Container, Row, Card, ListGroup, Image, Ratio } from "react-bootstrap"



const WikiCoffeePage = () => {
    return (
        <Container>
            <Row>

                <Col md={{ span: 3 }}>
                    <Card className="mb-5">
                        <Card.Img variant="top" src="src/assets/roaster-at-local-coffee-business.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={{ span: 6 }}>
                    <h1>Tips</h1>
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
                    <Card className="mb-5">
                        <Card.Img variant="top" src="src/assets/coffee-press-into-crystal.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{ span: 4 }}>
                    <Card className="mb-5">
                        <Card.Img variant="top" src="src/assets/freshly-picked-coffee-beans.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container>
    )
}

export default WikiCoffeePage