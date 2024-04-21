import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImage from "../assets/about.webp";

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
        </>
    )
}

export default About;