
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { Form, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import { API_URL } from './../../../conts/apiEndpoints'

const SearchCoffees = () => {
    const [coffees, setCoffees] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const searchInputRef = useRef(null);
    const listRef = useRef(null);

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
        if (!value) {
            setCoffees([])
            setSearchTerm('')
        }
        setSearchTerm(value)
    }

    const handleFilterValue = e => {
        setCoffees([])
        setSearchTerm('')
    }

    const handleClickOutside = (event) => {
        if (
            searchInputRef.current && !searchInputRef.current.contains(event.target) &&
            listRef.current && !listRef.current.contains(event.target)
        ) {
            setCoffees([])
            setSearchTerm('')
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            <Form.Control
                type="text"
                placeholder="Escribe un nombre..."
                className=" mr-sm-2"
                onKeyUp={handleFilter}
                onChange={handleFilter}
                value={searchTerm}
                ref={searchInputRef}
            />
            <ListGroup style={{ position: 'absolute', zIndex: '99' }}>
                {
                    coffees.length === 0 ? <></> :
                        coffees.map((elm) =>
                            <Link to={`/coffee/${elm.id}`} onClick={handleFilterValue} key={elm.id} ref={listRef}>
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