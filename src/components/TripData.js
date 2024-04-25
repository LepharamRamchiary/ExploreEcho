import React from 'react'
import "./TripStyle.css";


function TripData(props) {
    return (
        <div className='t-card'>
            <div className='t-image'>
                <img src={props.images} alt='iamge' />
            </div>
            <h4>{props.heading}</h4>
            <a>{props.location}</a>
            <p>{props.text}</p>
        </div>
    )
}

export default TripData