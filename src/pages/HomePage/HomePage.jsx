import { Container } from "react-bootstrap"
import "./HomePage.css"
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel"

const Homepage = () => {
    return (
        <Container fluid className="bg-secondary m-0 flex-grow-1 text-white d-flex justify-content-center align-items-center">
            <HeroCarousel />
        </Container>
    )
}

export default Homepage