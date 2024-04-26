import "./TripStyle.css";
import React from 'react'
import TripData from "./TripData";

import Mzu from '../assets/mzu.jpg';
import Mz from '../assets/mz.JPG';
import Um from '../assets/Um.jpg';
import Kako from '../assets/kako.jpg';
import Tea from '../assets/tea.jpg';
import Pani from '../assets/pani.jpg';

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps</p>
            <div className="tripcard">
                <TripData
                    location="Chirang,Assam"
                    url="https://www.google.com/maps/place/Manas+National+Park/@26.8101791,91.2369083,17z/data=!3m1!4b1!4m6!3m5!1s0x37596e8ccb18febf:0x4bcf99d7c6732bfd!8m2!3d26.8101743!4d91.2394832!16s%2Fm%2F0262656?entry=ttu"
                    images={Mz}
                    heading="Manas National Park"
                    text="Manas National Park, nestled in Assam, India, is a haven for wildlife enthusiasts and nature lovers. Its lush forests, grasslands, and water bodies are home to diverse flora and fauna, including endangered species like the Bengal tiger and Indian rhinoceros. Safari tours offer thrilling opportunities to spot these magnificent creatures."
                />

                <TripData
                    location=" North Guwahati, Guwahati, Assam"
                    url="https://www.google.com/maps/place/Sri+Umananda+Temple/@26.196497,91.742333,17z/data=!3m1!4b1!4m6!3m5!1s0x375a5a180f2b0e91:0xe9f66407624adc3f!8m2!3d26.1964922!4d91.7449079!16s%2Fm%2F0268nct?entry=ttu "
                    images={Um}
                    heading="Umananda Temple"
                    text="Umananda Temple, situated on Peacock Island in the Brahmaputra River, Assam, India, is a sacred Hindu shrine dedicated to Lord Shiva. Accessible by ferry, it offers a tranquil escape with panoramic river views. Pilgrims and tourists visit to seek blessings and admire its serene ambiance amidst natural beauty."
                />

                <TripData
                    location="Majuli,Assam"
                    url="https://www.google.com/maps/place/Majuli/@26.9641357,93.7911795,10z/data=!4m10!1m2!2m1!1sMajuli!3m6!1s0x3746c41068c5707f:0x3dd7532bf70e8c60!8m2!3d27.0016172!4d94.2242981!15sCgZNYWp1bGmSAQZpc2xhbmTgAQA!16zL20vMDNsY3B4?entry=ttu "
                    images={Mzu}
                    heading="Majuli"
                    text="Majuli, nestled in the Brahmaputra River of Assam, India, is the world's largest river island. Known for its rich cultural heritage, it is home to unique Vaishnavite monasteries (satras), traditional art forms, and vibrant festivals. Tourists flock to experience its serene beauty, rural life, and spiritual atmosphere."
                />

            </div>
            <div className="tripcard">
                <TripData
                    location="Bokakhat,Karbi Anglong,Assam"
                    url="https://www.google.com/maps/place/Kakochang+Waterfall/@26.5620453,93.6004894,17z/data=!3m1!4b1!4m6!3m5!1s0x374425048efdf555:0x70370703c6bb5e13!8m2!3d26.5620405!4d93.6030643!16s%2Fg%2F11c600mhsy?entry=ttu"
                    images={Kako}
                    heading="Kakochang Waterfall"
                    text="Kakochang Waterfall, nestled in the lush greenery of Assam, India, is a picturesque attraction for nature enthusiasts. Cascading from rocky cliffs, its pristine waters create a serene ambiance. Visitors enjoy the scenic trek to reach the falls and relish in its refreshing spray, making it a memorable destination for tourists."
                />

                <TripData
                    location="Biswanath, Assam"
                    url="https://www.google.com/maps/place/Monabari+Tea+Estate/@26.7690958,93.271941,17z/data=!3m1!4b1!4m6!3m5!1s0x37446819942f68d9:0xf032c9c66cb3dc14!8m2!3d26.769091!4d93.2745159!16s%2Fg%2F11cfhm2fv?entry=ttu "
                    images={Tea}
                    heading="Monabari Tea Estate"
                    text="Monabari Tea Estate, nestled in Assam, India, offers tourists a glimpse into the fascinating world of tea production. Visitors can explore lush tea gardens, witness the plucking and processing of tea leaves, and indulge in tasting sessions to savor the authentic flavors of Assam's renowned tea."
                />

                <TripData
                    location="Sivasagar,Assam"
                    url="https://www.google.com/maps/place/Panidehing+Bird+Sanctuary/@27.0924187,94.6229046,17z/data=!3m1!4b1!4m6!3m5!1s0x37473355c9fba9ff:0xb17b93a6497dd310!8m2!3d27.0924139!4d94.6254795!16s%2Fg%2F11gdt1g0jk?entry=ttu"
                    images={Pani}
                    heading="Panidehing Bird Sanctuary"
                    text="Panidehing Bird Sanctuary, located in Assam, India, is a haven for birdwatchers. Spanning over wetlands and marshes, it hosts a rich diversity of avian species, including migratory birds like the Asian openbill stork and lesser whistling duck. Visitors can enjoy serene walks and birdwatching sessions amidst picturesque natural surroundings."
                />

            </div>
        </div>
    )
}

export default Trip
