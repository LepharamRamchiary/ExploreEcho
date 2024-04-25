import "./TripStyle.css";
import React from 'react'
import TripData from "./TripData";

import TripImage from '../assets/Rangghar.jpg';

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps</p>
            <div className="tripcard">
                <TripData
                    location="any"
                    images={TripImage}
                    heading="Rang ghar"
                    text="It is known as first Ampitheatre or first Pavilion of Asia. It was built by Swargadeo Promotta Singha in the year 1744 A.D. Its shape is octagonal at base. The building has two storeys. At the roof of the structure is shaped like an inverted royal Ahom long boat where there are the projecting heads of two small MAKARAS or JALAHASTIS facing reverse towards north and south. The Rang Ghar was built specially for enjoyment of recreational/sports activit"
                />

                <TripData
                    location="any"
                    images={TripImage}
                    heading="Rang ghar"
                    text="It is known as first Ampitheatre or first Pavilion of Asia. It was built by Swargadeo Promotta Singha in the year 1744 A.D. Its shape is octagonal at base. The building has two storeys. At the roof of the structure is shaped like an inverted royal Ahom long boat where there are the projecting heads of two small MAKARAS or JALAHASTIS facing reverse towards north and south. The Rang Ghar was built specially for enjoyment of recreational/sports activities by"
                />

                <TripData
                    location="any"
                    images={TripImage}
                    heading="Rang ghar"
                    text="It is known as first Ampitheatre or first Pavilion of Asia. It was built by Swargadeo Promotta Singha in the year 1744 A.D. Its shape is octagonal at base. The building has two storeys. At the roof of the structure is shaped like an inverted royal Ahom long boat where there are the projecting heads of two small MAKARAS or JALAHASTIS facing reverse towards north and south. The Rang Ghar was built specially for enjoyment of recreational/sports activiti"
                />
            </div>
        </div>
    )
}

export default Trip
