import { useEffect, useState } from "react"
import axios from "axios"
import CoffeCardForAdmin from "../CoffeeCard/CoffeCardForAdmin"
import { Row } from "react-bootstrap"

const API_URL = 'http://localhost:5005'

const CoffeeListForAdmin = () => {

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
                    <CoffeCardForAdmin {...elm} key={elm.id} />
                )
            }
        </>
    )
}

export default CoffeeListForAdmin