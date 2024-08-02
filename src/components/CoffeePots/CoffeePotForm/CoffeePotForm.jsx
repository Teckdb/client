import Form from 'react-bootstrap/Form';

const CoffeePotForm = () => {
    return (
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">Expresso Machine</option>
            <option value="2">Drip Coffee Maker</option>
            <option value="3">French Press</option>
            <option value="4">Moka</option>
            <option value="5">Pour-Over Coffee Maker</option>
            <option value="6">Cold Brew Coffee Maker</option>
            <option value="7">Aeropress</option>
            <option value="8">Percolator</option>
            <option value="9">Single-Serve Pod Coffee Maker</option>
        </Form.Select>
    )
}

export default CoffeePotForm