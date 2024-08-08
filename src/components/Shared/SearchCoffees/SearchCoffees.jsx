
import { useEffect, useState } from "react"
import axios from "axios"
import { Form, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import { API_URL } from './../../../conts/apiEndpoints'

const SearchCoffees = () => {
    const [coffees, setCoffees] = useState([])


    useEffect(() => {
        fetchAllCoffees()
    }, [])

    const fetchAllCoffees = query => {

        query && axios
            .get(`${API_URL}/coffees?name_like=${query}`)
            .then((res) => {
                setCoffees(res.data)
            })
            .catch((err) => console.log(err))
    }

    const handleFilter = event => {
        const { value } = event.target
        fetchAllCoffees(value)
    }

    const handleFilterValue = e => {
        setCoffees([])
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
                    coffees.length === 0 ? <></> :
                        coffees.map((elm) =>
                            <Link to={`/coffee/${elm.id}`} onClick={handleFilterValue} key={elm.id}>
                                <ListGroupItem >
                                    {elm.name}
                                </ListGroupItem>
                            </Link>

                        )
                }
            </ListGroup>
        </>
    )
}

export default SearchCoffees