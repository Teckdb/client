import { useEffect, useState } from "react"
import { API_URL } from './../../../conts/apiEndpoints'
import CoffeePotCardForAdmin from "../CoffeePotCard/CoffeePotCardForAdmin"
import axios from "axios"

const CoffeePotsListForAdmin = () => {
    const [coffeePots, setCoffeesPots] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchAllCoffePots = () => {
        axios
            .get(`${API_URL}/coffeePots`)
            .then(res => {
                setCoffeesPots(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchAllCoffePots()
    }, [])

    return (
        <>
            {
                loading ? <p>Loading...</p> :
                    coffeePots.map((elm) =>
                        <CoffeePotCardForAdmin {...elm} key={elm.id} />
                    )
            }
        </>
    )
}

export default CoffeePotsListForAdmin