import React from 'react'
import Kamakhya from "../assets/KamakhyaTemple.jpg"
import Kamakhya1 from "../assets/kamakhya.jpg"
import "./DestinationStyle.css"

const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            <div className='first-des'>
                <div className='des-text'>
                    <h2>Kamakhya Temple,Guwahati</h2>
                    <p>The Kamakhya Temple at Nilachal hills in Guwahati, Assam is one of the oldest and most revered centres of Tantric practices,[3] dedicated to the goddess Kamakhya. The temple is the center of the Kulachara Tantra Marga and the site of the Ambubachi Mela, an annual festival that celebrates the menstruation of the goddess.</p>
                </div>

                <div className='image'>
                    <img src={Kamakhya} alt='img'/>
                    <img src={Kamakhya1} alt='img'/>
                </div>
            </div>
        </div>
    )
}

export default Destination
