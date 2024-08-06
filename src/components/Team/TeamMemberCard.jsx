import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const TeamMemberCard = ({ member }) => (
    <Col className="d-flex justify-content-center mb-3 mt-5">
        <Card style={{ width: '18rem' }} className="text-center">
            <Card.Img variant="top" src={member.image} className="card-image-rectangular" />
            <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.position}</Card.Text>
                <Button variant="primary" href={`/team/${member.id}`}>View Profile</Button>
            </Card.Body>
        </Card>
    </Col>
);
export default TeamMemberCard;
