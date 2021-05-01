import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getSingleAircraft } from "../../store/gallery";
import { csrfFetch } from "../../store/csrf"

const AircraftDetail = () => {
    const { aircraftId } = useParams();
    const dispatch = useDispatch();
    const aircraft = useSelector(state => (state.gallery[aircraftId]))
    const currentLocation = aircraft?.Airport.iataCode
    useEffect(() => {
        if (aircraftId) {
            dispatch(getSingleAircraft(aircraftId))
        }
    }, [dispatch, aircraftId])

    if (!aircraft) {
        return null;
    }

    async function bookAircraft(id) {

        const res = await csrfFetch(`/api/aircraft/${id}/book`, {method: "PUT"})
        
        return
    }

    let content = (
        <div className="aircraft-detail-lists">
            <div>
                <h2>Information</h2>
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
                <div>
                    <button onClick={() => bookAircraft(aircraftId)}>Book this aircraft</button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="aricraft-detail">
            <div className={`aircraft-detail-image-background`}>
                <div
                    className="aircraft-detail-image"
                    style={{backgroundImage: `url('${aircraft.immageUrl1})`}}
                ></div>
            </div>
            {content}
        </div>
    )

}

export default AircraftDetail;