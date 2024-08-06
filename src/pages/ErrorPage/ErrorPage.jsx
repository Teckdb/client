import { Col, Container, Row, Figure } from "react-bootstrap"
import Main from "../../components/ThreeReact/MainThree"

const ErrorPage = () => {
    return (
        // <Container fluid className="windowsCalc m-0 p-0">
        //     <Main />
        // </Container>
        <div style={{ position: 'relative', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
            <Main />
        </div>
    )
}

export default ErrorPage

