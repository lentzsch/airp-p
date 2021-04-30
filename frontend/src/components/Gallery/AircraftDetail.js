import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getAircraft, getSingleAircraft } from "../../store/gallery";

const AircraftDetail = () => {
    const { aircraftId } = useParams();
    const dispatch = useDispatch();
    const aircraft = useSelector(state => Object.values(state.gallery[aircraftId]))
    console.log('aircraft------------>', aircraft)
    useEffect(() => {
        dispatch(getSingleAircraft(aircraftId))
    })

    if (!aircraft) {
        return null;
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
                        <b>IFR</b> {aircraft.ifr}
                    </li>
                    <li>
                        <b>Current Location</b> {aircraft.currentLocationId}
                    </li>
                </ul>
            </div>
        </div>
    );

    return (
        <div className="aricraft-detail">
            <div className={`aircraft-detail-image-background`}>
                <div
                    className="aircraft-detail-image"
                    style={{backgroundImag: `url('${aircraft.immageUrl1})`}}
                ></div>
            </div>
            {content}
        </div>
    )

}

export default AircraftDetail;