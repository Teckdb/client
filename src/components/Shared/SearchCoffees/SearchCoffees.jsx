import { Col, Container, Dropdown, Form, Row } from "react-bootstrap"
import CoffeeList from "../../Coffee/CoffeeList/CoffeeList"

const SearchCoffees = () => {

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Search Coffee
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Row>
                        <Col>
                            <CoffeeList needFilter={true} />
                        </Col>
                    </Row>
                </Dropdown.Menu>
            </Dropdown>
        </>

    )
}

export default SearchCoffees