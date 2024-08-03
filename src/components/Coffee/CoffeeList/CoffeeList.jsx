import { useEffect, useState } from "react"
import axios from "axios"
import CoffeeCard from "../CoffeeCard/CoffeeCard"
import { Link, useNavigate } from "react-router-dom"

const API_URL = 'http://localhost:5005'

const CoffeeList = () => {

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
        <div className="CoffeeList">

            {
                coffees.map((coffees) => {
                    return (
                        <div className="CoffeCard card" key={coffees.id}>
                            <Link to={`/coffees/${coffees.id}`}>

                                <CoffeeCard />
                            </Link>
                        </div>

                    )
                })
            }


        </div>
    )
}

export default CoffeeList