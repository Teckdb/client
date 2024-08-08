import { Container, Row } from 'react-bootstrap';
import { TEAMMEMBERS } from '../../conts/teamMembers';
import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamSection = () => (
    <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <Row>
            {TEAMMEMBERS.map(member => (
                <TeamMemberCard key={member.id} member={member} />
            ))}
        </Row>
    </Container>
);

export default TeamSection;
