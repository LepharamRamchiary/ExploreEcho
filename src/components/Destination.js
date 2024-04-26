import React from 'react';
import "./DestinationStyle.css";
import Data from "./Data"
import Kamakhya from "../assets/KamakhyaTemple.jpg"
import Kamakhya1 from "../assets/kamakhya.jpg"
import Rang from "../assets/Rangghar.jpg"
import Rang1 from "../assets/Rangghor1.jpg"
import Kz from "../assets/kz.jpg"
import Kz1 from "../assets/kz1.jpg"


const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            <Data
                className="first-des"
                heading="Kaziranga National Park"
                text="Kaziranga National Park in Assam, India, captivates tourists with its iconic Indian one-horned rhinoceroses, diverse wildlife, and extensive birdlife. Visitors are drawn to thrilling safaris offering encounters with elephants, tigers, and other creatures in picturesque landscapes. Cultural immersion with local communities enriches the experience, while conservation efforts underscore its significance."
                location="Golaghat,Assam "
                url = "https://www.google.com/maps/place/Kaziranga+National+Park/@26.6485199,93.335995,13.83z/data=!4m6!3m5!1s0x3744412d379f65df:0x8b2b74b6e7c99458!8m2!3d26.6445044!4d93.3524858!16zL20vMDNkMGxt?entry=ttu"
                img1={Kz}
                img2={Kz1}
            />

            <Data
                className="first-des-reverse"
                heading="Rang Ghar"
                text="Rang Ghar showcases Assam's royal heritage and architectural grandeur. Tourists explore the historic amphitheater, admiring its octagonal shape and detailed carvings. Inside, they envision past cultural events. Guides offer insights into its role in the Ahom dynasty. With its serene ambiance and well-preserved structure, Rang Ghar captivates visitors seeking Assam's cultural richness."
                location="Sivasagar,Assam"
                url ="https://www.google.com/maps/place/Rang+Ghar/@26.9671276,94.6164881,17z/data=!3m1!4b1!4m6!3m5!1s0x374731c1f5c79b3b:0xcd0493d77c577d8a!8m2!3d26.9671228!4d94.619063!16s%2Fm%2F02ptkr2?entry=ttu"
                img1={Rang}
                img2={Rang1}
            />

            <Data
                className="first-des"
                heading="Kamakhya Temple"
                text="Kamakhya Temple, perched atop Nilachal Hill in Assam, India, is a revered pilgrimage site dedicated to the Hindu goddess Kamakhya. Tourists flock to witness its unique architecture, sacred rituals, and vibrant festivals. With panoramic views of the Brahmaputra River, it offers a spiritual and cultural experience amid lush surroundings."
                location="Guwahati,Assam "
                url ="https://www.google.com/maps/place/Maa+Kamakhya+Temple/@26.1664156,91.7029282,17z/data=!3m1!4b1!4m9!3m8!1s0x375a5b04b0f06ef1:0xaaad40304c7d3d1d!5m2!4m1!1i2!8m2!3d26.1664108!4d91.7055031!16zL20vMDVsMDJz?entry=ttu"
                img1={Kamakhya}
                img2={Kamakhya1}
            />
        </div>
    )
}

export default Destination
