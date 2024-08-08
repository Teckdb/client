import axios from "axios"
import { useEffect, useState } from "react"
import CoffeePotCardForAdmin from "../CoffeePotCard/CoffeePotCardForAdmin"
import { API_URL } from './../../../conts/apiEndpoints'

const CoffeePotsListForAdmin = () => {
    const [coffeePots, setCoffeesPots] = useState([])

    const fetchAllCoffePots = () => {
        axios
            .get(`${API_URL}/coffeePots`)
            .then(res => {
                setCoffeesPots(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchAllCoffePots()
    }, [])

    return (
        <>
            {
                coffeePots.map((elm) =>
                    <CoffeePotCardForAdmin {...elm} key={elm.id} />
                )
            }
        </>
    )
}

export default CoffeePotsListForAdmin