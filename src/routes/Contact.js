import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImage from "../assets/contact.avif";

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
        </>
    )
}

export default Contact;