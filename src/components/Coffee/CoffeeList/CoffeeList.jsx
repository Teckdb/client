import { useEffect, useState } from "react"
import axios from "axios"
import CoffeeCard from "../CoffeeCard/CoffeeCard"
import { Col } from "react-bootstrap"

const API_URL = 'http://localhost:5005'

const CoffeeList = () => {

    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        fetchAllCoffees()
    }, [])

    const fetchAllCoffees = () => {
        axios
            .get(`${API_URL}/coffees`)
            .then((res) => setCoffees(res.data))
            .catch((err) => console.log(err))
    }


    return (
        <>
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