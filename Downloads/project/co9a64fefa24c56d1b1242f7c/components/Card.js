import React from "react";

export default function Card(props) {
    // console.log(props);
    return (
        <div>
            <div className = "card">
                <img className = "img" src = {`${props.imageUrl}`} />
                    <div className = "location">
                        <div className = "icon--country">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-location padding-top">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            <p className = "country padding-top text-shadow">{props.location}</p>
                            <a href = {props.googleMapsUrl} className = "google-map padding-top text-shadow">View on Google Maps</a>
                        </div>
                        <div className = "card-details">
                            <h2 className = "card-details-h2 text-shadow" >{props.title}</h2>
                            <p className = "card-details-p1 text-shadow">{`${props.startDate} - ${props.endDate}`}</p>
                            <p className = "card-details-p2 text-shadow">{props.description}</p>
                        </div>
                    </div> 
            </div>
                <hr />
        </div>
    
    )
}
