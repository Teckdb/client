import { useEffect, useState } from "react"
import axios from "axios"
import CoffeeCard from "../CoffeeCard/CoffeeCard"
import { Col, Form } from "react-bootstrap"

const API_URL = 'http://localhost:5005'

const CoffeeList = ({ needFilter }) => {

    const [coffees, setCoffees] = useState([])
    const [coffeesBackup, setcoffeesBackup] = useState([])


    const filterCoffees = query => {
        const filteredCoffees = coffeesBackup.filter(elm => elm.name.toLowerCase().includes(query))
        setCoffees(filteredCoffees)
    }

    useEffect(() => {
        fetchAllCoffees()
    }, [])

    const fetchAllCoffees = () => {
        axios
            .get(`${API_URL}/coffees`)
            .then((res) => {
                setCoffees(res.data)
                setcoffeesBackup(res.data)
            })
            .catch((err) => console.log(err))
    }

    const handleFilter = event => {
        const { value } = event.target
        filterCoffees(value)
    }


    return (
        <>

            {needFilter ? <Form.Control
                type="text"
                placeholder="Escribe un nombre..."
                className=" mr-sm-2"
                onKeyUp={handleFilter}
            /> : <></>}
            {
                coffees.map((elm) =>
                    <Col key={elm.id} className="mb-4">
                        <CoffeeCard {...elm} />
                    </Col>
                )
            }
        </>
    )
}

export default CoffeeList