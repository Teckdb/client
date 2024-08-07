import { useEffect, useState } from "react"
import axios from "axios"
import CoffeeCard from "../CoffeeCard/CoffeeCard"
import { Card, CardBody, Col, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap"


const API_URL = 'http://localhost:5005'

const CoffeeListForSearch = () => {

    const [coffees, setCoffees] = useState([])
    const [coffeesBackup, setcoffeesBackup] = useState([])

    const filterCoffees = query => {
        const filteredCoffees = coffeesBackup.filter(elm => elm.name.toLowerCase().includes(query))
        setCoffees(filteredCoffees)
    }

    useEffect(() => {
        fetchAllCoffees()
    }, [])

    const fetchAllCoffees = query => {

        query && axios
            .get(`${API_URL}/coffees?name_like=${query}`)
            .then((res) => {
                setCoffees(res.data)
                setcoffeesBackup(res.data)
            })
            .catch((err) => console.log(err))
    }

    const handleFilter = event => {
        const { value } = event.target
        fetchAllCoffees(value)
    }

    const handleFilterValue = e => {
        setcoffeesBackup([])

    }

    return (
        <>
            <Form.Control
                type="text"
                placeholder="Escribe un nombre..."
                className=" mr-sm-2"
                onKeyUp={handleFilter}
                onChange={handleFilterValue}
            />
            <ListGroup style={{ position: 'absolute', zIndex: '99' }}>
                {
                    coffeesBackup.length === 0 ? <></> :
                        coffees.map((elm) =>
                            <ListGroupItem key={elm.id}>
                                {elm.name}
                            </ListGroupItem>
                        )
                }
            </ListGroup>

        </>
    )
}

export default CoffeeListForSearch