import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import CoffeePotCard from "../CoffeePotCard/CoffeePotCard"

const API_URL = 'http://localhost:5005'



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
            {coffeePots.map((elm) =>
                <Col key={elm.id}>
                    <CoffeePotCard  {...elm} />
                </Col>
            )}
        </>
    )
}

export default CoffeePotsList