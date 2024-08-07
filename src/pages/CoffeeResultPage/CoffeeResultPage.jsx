import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import CoffeeList from "../../components/Coffee/CoffeeList/CoffeeList"
import axios from "axios"
import { useEffect, useState } from "react"
const API_URL = 'http://localhost:5005'

const CoffeeResultsPage = () => {

    const { potId } = useParams()

    const [coffeePot, setCoffeePot] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchCoffeePot()
    }, [])

    const fetchCoffeePot = () => {
        axios
            .get(`${API_URL}/coffeePots/?potId=${potId}`)
            .then(res => {
                setCoffeePot(res.data)
                setLoading(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container className=" text-black mt-5">
            <h1>
                {
                    loading ?
                        (<>This is our selection for {coffeePot[0].name}</>)
                        :
                        (<>Loading...</>)
                }
            </h1>
            <CoffeeList potId={potId} />
        </Container>
    )
}

export default CoffeeResultsPage