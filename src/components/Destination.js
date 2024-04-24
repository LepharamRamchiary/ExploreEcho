import React from 'react';
import "./DestinationStyle.css";
import Data from "./Data"
import Kamakhya from "../assets/KamakhyaTemple.jpg"
import Kamakhya1 from "../assets/kamakhya.jpg"
import Rang from "../assets/Rangghar.jpg"
import Rang1 from "../assets/Rangghor1.jpg"


const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            <Data
                className="first-des"
                heading="Kamakhya Temple"
                text="The Kamakhya Temple at Nilachal hills in Guwahati, Assam is one of the oldest and most revered centres of Tantric practices,[3] dedicated to the goddess Kamakhya. The temple is the center of the Kulachara Tantra Marga and the site of the Ambubachi Mela, an annual festival that celebrates the menstruation of the goddess."
                location="Guwahati "
                img1={Kamakhya}
                img2={Kamakhya1}
            />

            <Data
                className="first-des-reverse"
                heading="Rang Ghar"
                text="It is known as first Ampitheatre or first Pavilion of Asia. It was built by Swargadeo Promotta Singha in the year 1744 A.D. Its shape is octagonal at base. The building has two storeys. At the roof of the structure is shaped like an inverted royal Ahom long boat where there are the projecting heads of two small MAKARAS or JALAHASTIS facing reverse towards north and south. The Rang Ghar was built specially for enjoyment of recreational/sports activities by the royal families and public of the Ahom dynasty."
                location="Sivasagar"
                img1={Rang}
                img2={Rang1}
            />
        </div>
    )
}

export default Destination
