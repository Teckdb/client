import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './CoffeeCard.css'
import { Link } from 'react-router-dom';


const CoffeeCard = ({ name, description, id, image }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} className='img-fluid img-limited-height' />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {`${description.slice(0, 100)}...`}
                </Card.Text>
                <Button variant="primary" as={Link} to={`/coffee/${id}`}>Go Details</Button>
            </Card.Body>
        </Card>
    );
}

export default CoffeeCard;