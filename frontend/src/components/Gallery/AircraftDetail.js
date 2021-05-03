import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom"
import { getSingleAircraft } from "../../store/gallery";
import { csrfFetch } from "../../store/csrf"
import './Gallery.css'


const AircraftDetail = () => {
    const { aircraftId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const aircraft = useSelector(state => (state.gallery[aircraftId]));
    const sessionUser = useSelector(state => state.session.user);
    const currentLocation = aircraft?.Airport?.iataCode;
    useEffect(() => {
        if (aircraftId) {
            dispatch(getSingleAircraft(aircraftId))
        }
    }, [dispatch, aircraftId])

    if (!aircraft) {
        return null;
    }
    let imageUrl = aircraft.imageUrl1

    async function bookAircraft(id) {
        if (sessionUser){
        const res = await csrfFetch(`/api/aircraft/${id}/book`, {method: "PUT"})
        alert('Aircraft booked!')
        history.push('/')
        return res;
        }
        return alert("Please log in to book an Aircraft")      
    }

    let content = (
        <div className="aircraft-detail-lists">
            <div>
                {/* <img src={image} alt="" /> */}
                <h3>Specs:</h3>
                <ul>
                    <li>
                        <b>Year</b> {aircraft.year}
                    </li>
                    <li>
                        <b>Make</b> {aircraft.make}
                    </li>
                    <li>
                        <b>Model</b> {aircraft.model}
                    </li>
                    <li>
                        <b>IFR</b> {aircraft.ifr? "yes" : "no"}
                    </li>
                    <li>
                        <b>Current Location</b> {currentLocation}
                    </li>
                </ul>
                </div>
                <div>
                    <button className="booking-button" onClick={() => bookAircraft(aircraftId)}>Book this aircraft</button>
                </div>
            </div>
       
    );

    return (
        <div className="aricraft-detail">
            <div className={`aircraft-detail-image-container`}>
                <img src={imageUrl} className="aircraft-detail-image" alt=""/>
            </div>
            {content}
        </div>
    )

}

export default AircraftDetail;