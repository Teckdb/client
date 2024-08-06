import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TabAdmin() {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home" className='bg-white'>
            <Nav.Item>
                <Nav.Link as={Link} to="/admin">Create Item</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/admin-edit-list">Edit Item</Nav.Link>
            </Nav.Item>

        </Nav>
    );
}

export default TabAdmin;