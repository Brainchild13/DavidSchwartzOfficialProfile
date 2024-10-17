import { Container, Row, Col, Image } from 'react-bootstrap'
import posts from '../../components/data/postData.json'

function GetOnePost() {
    return (
        <Container>
            <Row>
                {posts.id}
                <Col>
                    <Image src={posts.featuredImage} alt={posts.title} fluid />

                </Col>
                <Col>
                    <h1>{posts.title}</h1>
                    <p>{posts.author}</p>
                </Col>
            </Row>
            <Row>
                {posts.content}
            </Row>
        </Container>

    )
}

export default GetOnePost