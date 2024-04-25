import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImage from "../assets/service.avif";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service (){
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImage}
                title="Service"
                btnClass="hide"
            />
            <Trip />
            <Footer />
        </>
    )
}

export default Service;