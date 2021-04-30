// frontend/src/store/gallery.js
import { csrfFetch } from './csrf';

const LOAD = 'gallery/LOAD';

const load = (list) => ({
    type: LOAD,
    list,
})

export const getAircraft = () => async (dispatch) => {
    const res = await fetch(`/api/gallery`);

    if (res.ok) {
        const list = await res.json();
        dispatch(load(list))
    }
}

export const getFilteredAircraft = (id) => async (dispatch) => {
    const res = await fetch(`/api/gallery/${id}`);
    
    if (res.ok) {
        const list = await res.json();
        dispatch(load(list))
    }

}

export const getSingleAircraft = (id) => async (dispatch) => {
    const res = await fetch(`/api/aircraft/${id}`);

    if (res.ok) {
        const aircraft = await res.json();
        dispatch(getAircraft(aircraft))
    }
}
const initialState = {};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allAircraft = {};
            action.list.forEach((aircraft) => {
                allAircraft[aircraft.id] = aircraft;
            });
            return {
                ...allAircraft,
            }
        }
        default:
            return state
    }
}

export default galleryReducer