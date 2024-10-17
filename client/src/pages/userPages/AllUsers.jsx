import users from '../../components/data/userData.json'
import { Container, Row, Col, Card } from 'react-bootstrap'

const AllUsers = () => {
    return (
        <Container>
            <Row>
                {users.map((user, index) => {
                    return (
                        <Col key={index}>
                            <Card>
                                <Card.Img variant='top' src={user.image} />
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Text>
                                        {user.email}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default AllUsers
