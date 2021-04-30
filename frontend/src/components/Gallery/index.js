// frontend/src/components/Gallery/index.js
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Route, useParams } from 'react-router-dom';

import AirportSelector from './AirportSelector';
import AircraftDetail from './AircraftDetail'
import { getAircraft } from '../../store/gallery';

const GalleryBrowser = () => {
    const dispatch = useDispatch
    const { aircraftId } = useParams()

    useEffect(() => {
        dispatch(getAircraft())
    }, [dispatch])

    const aircraft = useSelector(state => {
        console.log("state ----------------->",state)
        return state.aircraft.map(aircraftId => state.aircraft[aircraftId]);
    });

    if (!aircraft) {
        return null;
    }

    return (
        <main>
            <nav>
                {aircraft.map((aircraft) => {
                    return (
                        <NavLink key={aircraft.name} to={`/aircraft/${aircraft.id}`}>
                            <div
                                className={
                                    Number.parseInt(aircraftId) === aircraft.id
                                        ? "nav-entry is selected"
                                        : "nav-entry"
                                }
                            >
                                <div
                                    className="nav-entry-image"
                                    style={{ backgroundImage: `url('${aircraft.imageUrl1}')` }}
                                ></div>
                                <div>
                                    <div className="primary-text">{`${aircraft.year} ${aircraft.make} ${aircraft.model}`}</div>
                                    <div className="secondary-text">
                                        Place Holder Text Here
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    );
                })}
            </nav>
            <Route path="/aircraft/:aircraftId">
                <AircraftDetail/>
            </Route>
        </main>
    )
}

export default GalleryBrowser;