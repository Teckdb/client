import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import testIMG from './../../../assets/coffee-pots/test.jpg'
import './CoffeeCard.css'
import { Link } from 'react-router-dom';


const CoffeeCard = ({ name, description, id }) => {

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={testIMG} className='img-fluid img-limited-height' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {`${description}...`}
                    </Card.Text>
                    <Button variant="primary" as={Link} to={`/coffee/${id}`}>Go Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CoffeeCard;