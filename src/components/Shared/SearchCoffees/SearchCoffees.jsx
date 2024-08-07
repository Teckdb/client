import { Col, Dropdown, Row } from "react-bootstrap"
import CoffeeList from "../../Coffee/CoffeeList/CoffeeList"

const SearchCoffees = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Search Coffee
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <CoffeeList needFilter={true} />
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default SearchCoffees