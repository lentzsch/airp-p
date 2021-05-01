// frontend/src/components/Gallery/AirportSelector.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {getFilteredAircraft } from "../../store/gallery";
import { getAirports } from "../../store/airports";

const AirportSelector = () => {
    const { airportId } = useParams()
    const dispatch = useDispatch()  
    
    useEffect(() => {
        dispatch(getAirports())
    }, [dispatch])
    useEffect(() => {
        if (airportId) {
            dispatch(getFilteredAircraft(airportId))
        }
    }, [dispatch, airportId])
    
    const airports = useSelector(state => Object.values(state.airports))

    if (!airports.length) {
        return null;
    }
    return (
        <div className="airport-selector-container">
            <p>Filter by Airport</p>
            <div className="airport-selector">
            <select
                id="airports"
                name="airports"
                onChange={(e) => dispatch(getFilteredAircraft(e.target.value))}
            >
                <option value="">All</option>

                {airports?.map((airport) => {
                    return (
                        <option key={airport.id} value={airport.id}>{airport.iataCode}</option>
                    )
                })}
                </select>
            </div>
        </div>
    )
}

export default AirportSelector