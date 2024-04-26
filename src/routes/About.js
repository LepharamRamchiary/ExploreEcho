import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImage from "../assets/about.webp";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
// import HeroVi from "../assets/about.mp4";

function About (){
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid ve"
                heroImg={AboutImage}
                // heroVi = {HeroVi}
                title="About"
                btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About;