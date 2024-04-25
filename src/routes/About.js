import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImage from "../assets/about.webp";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About (){
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImage}
                title="About"
                btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About;