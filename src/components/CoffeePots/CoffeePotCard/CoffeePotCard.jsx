import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CoffeePotCard.css'
import { Link } from 'react-router-dom';

function CoffeePotCard({ name, description, potId, image }) {

    return (
        <>
            <Card style={{ width: '18rem' }} className='m-2'>
                <Card.Img variant="top" src={image} className='img-fixed-size' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {`${description.slice(0, 50)}...`}
                    </Card.Text>
                    <Button variant="primary" as={Link} to={`coffee-result/${potId}`}>Go list</Button>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}

export default CoffeePotCard;