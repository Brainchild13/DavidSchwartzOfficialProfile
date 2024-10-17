import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function ContactForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control tupe="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Button variant='primary' type='submit'>Submit</Button>

        </Form>
    )
}

export default ContactForm