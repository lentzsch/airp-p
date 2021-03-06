// frontend/src/components/Gallery/AirportSelector.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {getFilteredAircraft } from "../../store/gallery";
import { getAirports } from "../../store/airports";
import './AirportSelector.css'

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
            <div className="airport-selector-prompt">
                Filter by Airport
            </div>
            <div className="airport-selector">
            <select
                className="airport-selector-dropdown"
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