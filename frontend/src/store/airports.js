// frontend/src/store/airports.js
import { csrfFetch } from './csrf';

const LOAD = 'gallery/aiports/LOAD';

const load = (list) => ({
    type: LOAD,
    list,
})

export const getAirports = () => async (dispatch) => {
    const res = await csrfFetch(`/api/gallery/airports`, { method: "GET" });

    if (res.ok) {
        const list = await res.json();
        // console.log(Array.isArray(list))
        dispatch(load(list))
    }
}

const initialState = {};

const airportsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allAirports = {};
            action.list.forEach((airport) => {
                return allAirports[airport.id] = airport;
            });
            return {
                ...allAirports,
            }
        }
        default:
            return state
    }
}

export default airportsReducer