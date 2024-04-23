import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImage from "../assets/service.avif";

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
        </>
    )
}

export default Service;