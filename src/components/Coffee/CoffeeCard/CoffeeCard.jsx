import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const CoffeeCard = ({ name, description, id, image }) => {
    return (
        <Card style={{ width: '18rem' }} className='m-2'>
            <Card.Img variant="top" src={image} className='img-fluid img-limited-height' />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {`${description.slice(0, 100)}...`}
                </Card.Text>
                <Button variant="secondary" as={Link} to={`/coffee/${id}`}>Coffee Info</Button>
            </Card.Body>
        </Card>
    );
}

export default CoffeeCard;