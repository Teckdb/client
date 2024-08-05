import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import testIMG from './../../../assets/coffee-pots/test.jpg'
import './CoffeePotCard.css'
import { Link } from 'react-router-dom';


function CoffeePotCard({ name, description, potId }) {

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={testIMG} className='img-fluid img-limited-height' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {`${description.slice(0, 50)}...`}
                    </Card.Text>
                    <Button variant="primary" as={Link} to={`coffee-result/${potId}`}>Go list</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CoffeePotCard;