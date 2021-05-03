// frontend/src/components/Gallery/index.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Route } from 'react-router-dom';
import AircraftDetail from './AircraftDetail'
import { getAircraft} from '../../store/gallery';
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
            <nav className="aircraft-list">
                {aircraft?.map((aircraft) => {
                    // let image = aircraft.imageUrl1
                    // console.log('aircarft at 0 ----->', aircraft[0])
                    // const airport = aircraft?.Airport
                    return (
                        <div key={`aircraft-${aircraft.id}-container `} className=" aircarft-container">
                        <NavLink key={aircraft.id} to={`/aircraft/${aircraft.id}`} className="aircraft-link">
                                {/* <div className="aircraft-image-container"> */}
                                <img src={aircraft.imageUrl1} alt='' className="aircaft-image" key={`aircraft-${aircraft.id}-image`}/>
                                {/* </div> */}
                                {/* <div> */}
                                <div key={`aircraft-${aircraft.id}-list-info`} className="aircraft-list-info">
                                    <div key={`aircraft-${aircraft.id}-`} className="primary-text">{`${aircraft.year} ${aircraft.make} ${aircraft.model}`}</div>
                                    <div className="secondary-text">
                                        {aircraft?.Airport?.iataCode}
                                    </div> 
                                    <div> 
                                        {`${aircraft.Airport?.city}, ${aircraft.Airport?.state}`}
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