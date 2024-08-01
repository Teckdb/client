import { useParams } from "react-router-dom"

const CoffeeDetails = () => {

    const { idTest } = useParams()

    return (
        <>
            <h1>Hola! Soy CoffeeDetails</h1>
            <h2>Soy el id! = {idTest}</h2>
        </>

    )
}

export default CoffeeDetails