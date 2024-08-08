import './CoffeeCollection.css'
import { Container, ListGroup, Row, Col, Card } from "react-bootstrap"

const CoffeeCollection = () => {

    return (
        <Container>
            <Row>
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

export default CoffeeCollection