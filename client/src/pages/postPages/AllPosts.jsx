import posts from '../../components/data/postData.json'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'


function AllPosts() {
    return (
        <Container>
            <Row>
                {posts.map((post, index) => {
                    return (
                        <Col key={index}>
                            <Card>
                                <Card.Img variant='top' src={post.featuredImage} />
                                <Card.Body>
                                    <Card.Title>Title: {post.title}</Card.Title>
                                    <Card.Text>
                                        Content: {post.content}
                                    </Card.Text>
                                    <Card.Text>
                                        {post.author}
                                    </Card.Text>
                                    <Card.Text>
                                        Published: {post.published === true ? "True" : "False"}
                                    </Card.Text>
                                    <Button variant='success' href='/posts/{post._id}'>Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default AllPosts