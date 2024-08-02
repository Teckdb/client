import { useState } from "react"
import AddNewCoffeeForm from "../AddNewCoffeeForm/AddNewCoffeeForm"

const CoffeeList = () => {

    const [coffee, setCoffee] = useState()

    // const addNewCoffee = newCoffee => {
    //     const fullCoffeeList = [newCoffee, ...coffee]
    //     setCoffee(fullCoffeeList)
    // }

    return (
        // <AddNewCoffeeForm addNewCoffee={addNewCoffee} />
        <h1>hola</h1>
    )
}

export default CoffeeList