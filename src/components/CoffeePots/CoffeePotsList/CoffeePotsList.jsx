import { useEffect, useState } from "react"
import { API_URL } from './../../../conts/apiEndpoints'
import CoffeePotCard from "../CoffeePotCard/CoffeePotCard"
import axios from "axios"

const CoffeePotsList = () => {
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
                    <CoffeePotCard key={elm.id} {...elm} />
                )
            }
        </>
    )
}

export default CoffeePotsList