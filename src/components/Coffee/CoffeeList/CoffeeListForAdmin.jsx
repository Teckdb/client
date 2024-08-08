import { useEffect, useState } from "react"
import axios from "axios"
import CoffeCardForAdmin from "../CoffeeCard/CoffeCardForAdmin"
import { API_URL } from './../../../conts/apiEndpoints'

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