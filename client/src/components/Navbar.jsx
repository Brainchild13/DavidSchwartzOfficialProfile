
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


import { Stack } from 'react-bootstrap'

const Navbar = () => {
    return (
        <NavBar bg='dark' fixed='top' data-bs-theme='dark'>
            <Container fluid>
                <NavBar.Brand href='/'>David Schwartz Official</NavBar.Brand>
                <Nav className="me-auto">
                    <Nav.Item>
                        <Nav.Link href='https://davidschwartz.biz'>Blog</Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/contact'>Contact</Nav.Link>

                    </Nav.Item>
                    <Stack direction="horizontal" gap={3}>
                        <DropdownButton
                            id='dropdown-button-dark-example2'
                            variant='secondary'
                            title='Users'
                            className='mt-2'
                            data-bs-theme='dark'
                        >

                            <Dropdown.Item><Link to='/users'>All Users</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/users/add'></Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/users/update/:id'>Update User</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/users/:id'>Find One User</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/users/delete/:id'>Delete One User</Link></Dropdown.Item>
                        </DropdownButton>
                    </Stack>

                    <Stack direction="horizontal" gap={3}>
                        <DropdownButton
                            id='dropdown-button-dark-example2'
                            variant='secondary'
                            title='Projects'
                            className='mt-2'
                            data-bs-theme='dark'
                        >
                            <Dropdown.Item><Link to='/projects'>All Projects</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/projects/add'>Add Project</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/projects/update/:id'>Update Project</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/projects/:id'>Find One Project</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/projects/delete/:id'>Delete One Project</Link></Dropdown.Item>
                        </DropdownButton>
                    </Stack>

                    <Stack direction="horizontal" gap={3}>
                        <DropdownButton
                            id='dropdown-button-dark-example2'
                            variant='secondary'
                            title='Posts'
                            className='mt-2'
                            data-bs-theme='dark'
                        >
                            <Dropdown.Item><Link to='/posts'>All Posts</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/posts/add'>Add Post</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/posts/update/:id'>Update Post</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/posts/:id'>Find One Post</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/posts/delete/:id'>Delete One Post</Link></Dropdown.Item>
                        </DropdownButton>
                    </Stack>

                </Nav>
                <Row />
            </Container>
        </NavBar>
    )
}

export default Navbar
