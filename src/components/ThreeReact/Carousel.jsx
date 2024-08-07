import './util'
import CardThree from "./CardThree"
import { useEffect, useState } from 'react'
import axios from 'axios'
const API_URL = 'http://localhost:5005'

function Carousel() {

    const [coffeePots, setCoffeePots] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchAllCoffePots()
    }, [])

    const fetchAllCoffePots = () => {
        axios
            .get(`${API_URL}/coffeepots`)
            .then((res) => {
                setCoffeePots(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    if (loading) {
        return console.log("is loading...");
    }

    if (coffeePots.length === 0) {
        return console.log("no coffeePots");
    }

    const count = coffeePots.length
    const radius = coffeePots.length * 0.18

    return (
        Array.from({ length: count }, (_, i) => (
            <CardThree
                key={i}
                id={coffeePots[i % coffeePots.length].id}
                url={coffeePots[i % coffeePots.length].image}
                position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
                rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}

            />
        ))
    )
}

export default Carousel