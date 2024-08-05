import { useEffect, useState } from "react"
import axios from "axios"
import CoffeeCard from "../CoffeeCard/CoffeeCard"
import { Link } from "react-router-dom"
import { Col } from "react-bootstrap"

const API_URL = 'http://localhost:5005'

const fetchAllCoffees = ({ setCoffees }) => {
    axios
        .get(`${API_URL}/coffees`)
        .then((res) => setCoffees(res.data))
        .catch((err) => console.log(err))

}

const CoffeeList = () => {

    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        fetchAllCoffees({ setCoffees })
    }, [])


    return (
        <>
            {
                coffees.map((elm) =>
                    <Col key={elm.id}>
                        <CoffeeCard {...elm} />
                    </Col>
                )
            }
        </>
    )
}

export default CoffeeList