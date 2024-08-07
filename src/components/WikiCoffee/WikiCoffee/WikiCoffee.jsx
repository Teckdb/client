import { Col, Container, Row } from "react-bootstrap"


const WikiCoffee = () => {

    return (
        <Container fluid className="bg-secondary m-0 flex-grow-1 text-white d-flex justify-content-center align-items-center">
            <Row>
                <Col md={{ span: 3 }}>
                    <Stack direction='horizontal' gap={2}>
                        <Badge>Curiosities about Coffee</Badge>
                    </Stack>
                    <Card className='mb-5'>
                        <CardImg variant='top' src='src/assets/roaster-at-local-coffee-business.jpg'>
                            <CardBody>
                                <CardTitle>Coffee Roasting</CardTitle>
                                <CardText>
                                    Coffee roasting transforms green beans into aromatic, flavorful coffee through controlled heat application.
                                </CardText>
                            </CardBody>
                            <ListGroup>
                                <ListGroupItem>FairTrade</ListGroupItem>
                            </ListGroup>
                            <CardBody>
                                <CardLink href='#'>See Article</CardLink>
                            </CardBody>

                        </CardImg>
                    </Card>

                </Col>
            </Row>
        </Container>
    )
}

export default WikiCoffee