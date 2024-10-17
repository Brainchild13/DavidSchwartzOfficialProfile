import ContactForm from "../components/forms/ContactForm"
import Nav from 'react-bootstrap/Nav'

function Contact() {
    return (
        <>
            Contact
            <Nav.Item href='mailto:davidschwartz23@gmail.com'>Email Me</Nav.Item>
            <ContactForm />
        </>
    )
}

export default Contact