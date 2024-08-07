import './AboutPage.css'
import { Col, Container, Row } from "react-bootstrap"
import TeamSection from "../../components/Team/TeamSection"
import GenericSeparator from "../../components/Shared/GenericSeparator/GenericSeparator"
import AboutSeparator from "../../components/Shared/AboutSeparator/AboutSeparator"

const AboutPage = () => {
    return (
        <Container fluid className="m-0 text-black">
            <Row className="d-flex justify-content-center align-items-center">
                <Col className="d-flex justify-content-center mt-5">
                    <h1>Iron Coffee Lovers</h1>
                </Col>
            </Row>
            <GenericSeparator />
            <Row className="d-flex justify-content-center align-items-center">
                <TeamSection />
            </Row>
            <AboutSeparator />
        </Container>
    )
}

export default AboutPage