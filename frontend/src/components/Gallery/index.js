// frontend/src/components/Gallery/index.js
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Route } from 'react-router-dom';

import AirportSelector from './AirportSelector';
import AircraftDetail from './AircraftDetail'
import { getAircraft } from '../../store/gallery';
import image from '../../images/aircraft-images/plane-1/plane-1-image-1.jpg'

const GalleryBrowser = () => {
    const dispatch = useDispatch()
    // const { aircraftId } = useParams()

    useEffect(() => {
        dispatch(getAircraft())
    }, [dispatch])

    const aircraft = useSelector(state => Object.values(state.gallery))
    console.log(aircraft)

    // if (!aircraft.length) {
    //     return null;
    // }

    return (
        <main>
            <nav>
                {aircraft?.map((aircraft) => {
                    return (
                        <NavLink key={aircraft.id} to={`/aircraft/${aircraft.id}`}>
                            <div
                                // className={
                                //     Number.parseInt(aircraftId) === aircraft.id
                                //         ? "nav-entry is selected"
                                //         : "nav-entry"
                                // }
                            >
                                {/* <div
                                    className="nav-entry-image"
                                    style={{ image: image }}
                                ></div> */}
                                <img src={image} alt=''/>
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