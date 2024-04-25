import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImage from "../assets/contact.avif";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImage}
                title="Contact"
                btnClass="hide"
            />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;