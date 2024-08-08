import { useEffect, useState } from "react"
import { Row } from "react-bootstrap"
import { API_URL } from './../../../conts/apiEndpoints'
import axios from "axios"
import CoffeeCard from "../CoffeeCard/CoffeeCard"

const CoffeeList = ({ potId }) => {
    const [coffees, setCoffees] = useState([])
    const [coffeesBackup, setcoffeesBackup] = useState([])

    useEffect(() => {
        fetchAllCoffees()
    }, [])

    const fetchAllCoffees = () => {
        axios
            .get(`${API_URL}/coffees?coffeePotId=${potId}`)
            .then((res) => {
                setCoffees(res.data)
                setcoffeesBackup(res.data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <Row >
            {
                coffeesBackup.length === 0 ? <></> :
                    coffees.map((elm) =>
                        <CoffeeCard {...elm} key={elm.id} />
                    )
            }
        </Row>
    )
}

export default CoffeeList