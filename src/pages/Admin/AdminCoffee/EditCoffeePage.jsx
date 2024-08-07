import { Container } from "react-bootstrap"
import EditCoffeeForm from "../../../components/Coffee/EditCoffeeForm/EditCoffeeForm"
import TabAdmin from './../../../components/TabAdmin/TabAdmin'

const EditCoffeePage = () => {
    return (
        <Container>
            <TabAdmin />
            <h1>Admin Page</h1>
            <EditCoffeeForm />
        </Container>
    )
}

export default EditCoffeePage