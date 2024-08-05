import { Container } from "react-bootstrap"
import "./HomePage.css"
import Home from "../../components/Home/Home"

const Homepage = () => {
    return (
        <Container fluid className="bg-secondary m-0 flex-grow-1 text-white d-flex justify-content-center align-items-center">
            <Home />
        </Container>
    )
}

export default Homepage