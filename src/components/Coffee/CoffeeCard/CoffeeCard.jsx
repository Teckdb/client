import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CoffeeCard.css'

const CoffeeCard = () => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="src/assets/coffees/HONDURAS_FRONTAL.png" />
            <Card.Body>
                <Card.Title>name</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">See More</Button>
            </Card.Body>
        </Card>
    );
}

export default CoffeeCard;