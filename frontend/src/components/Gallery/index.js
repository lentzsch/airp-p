// frontend/src/components/Gallery/index.js
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Route } from 'react-router-dom';
import { csrfFetch } from "../../store/csrf"
// import AirportSelector from './AirportSelector';
import AircraftDetail from './AircraftDetail'
import { getAircraft, getFilteredAircraft } from '../../store/gallery';
import image from '../../images/aircraft-images/plane-1/plane-1-image-1.jpg'
import './Gallery.css'

const GalleryBrowser = () => {
    const dispatch = useDispatch()
    // const { aircraftId } = useParams()

    useEffect(() => {
        dispatch(getAircraft())
    }, [dispatch])

    // let airports;

    // async function getAirports() {
    //     const res = await csrfFetch(`/api/gallery/airports`, { method: "GET" });
    //     if (res.ok) {
    //         airports = await res.json();
    //         return
    //     }
    // }
    
    // getAirports().then(res => console.log(airports))
  

    const aircraft = useSelector(state => Object.values(state.gallery))

    // console.log('aircraft --------->', )

    if (!aircraft.length) {
        return null;
    }
    // console.log('aircraft ----->', aircraft)
    // console.log('aircraft.Airport ------>', aircraft.Airport)
    // console.log('aircraft?.Airport.iataCode -------->', aircraft?.Airport.iataCode)
    return (
        <main className="gallery">
            {/* <AirportSelector/> */}
            <nav>
                {aircraft?.map((aircraft) => {
                    // let image = aircraft.imageUrl1
                    // console.log('aircarft at 0 ----->', aircraft[0])
                    const airport = aircraft?.Airport
                    return (
                            <div className=" aircarft-container">
                        <NavLink key={aircraft.id} to={`/aircraft/${aircraft.id}`} className="aircraft-link">
                                {/* <div className="aircraft-image-container"> */}
                                <img src={aircraft.imageUrl1} alt='' className="aircaft-image"/>
                                {/* </div> */}
                                {/* <div> */}
                                <div key={aircraft.id} className="aircraft-list-info">
                                    <div className="primary-text">{`${aircraft.year} ${aircraft.make} ${aircraft.model}`}</div>
                                    {/* <div className="secondary-text">
                                        {aircraft?.Airport?.iataCode}
                                    </div> */}
                                    <div>
                                        {/* {`${aircraft.Airport?.city}, ${aircraft.Airport?.state}`} */}
                                    </div>
                                </div>
                        </NavLink>
                            </div>
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