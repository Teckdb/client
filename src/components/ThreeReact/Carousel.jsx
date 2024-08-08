import './util'
import CardThree from "./CardThree"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from './../../conts/apiEndpoints'

function Carousel() {

    const [coffeePots, setCoffeePots] = useState([])

    useEffect(() => {
        fetchAllCoffePots()
    }, [])

    const fetchAllCoffePots = () => {
        axios
            .get(`${API_URL}/coffeepots`)
            .then((res) => {
                setCoffeePots(res.data)
            })
            .catch(err => console.log(err))
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