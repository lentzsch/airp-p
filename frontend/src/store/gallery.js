// frontend/src/store/gallery.js
import { csrfFetch } from './csrf';

const LOAD = 'gallery/LOAD';

const load = (list) => ({
    type: LOAD,
    list,
})

export const getAircraft = () => async (dispatch) => {
    const res = await csrfFetch(`/api/gallery`, {method: "GET"});

    if (res.ok) {
        const list = await res.json();
        // console.log(Array.isArray(list))
        dispatch(load(list))
    }
}

export const getFilteredAircraft = (id) => async (dispatch) => {
    if(id) {
        const res = await csrfFetch(`/api/gallery/${id}`);
        
        if (res.ok) {
            const list = await res.json();
            dispatch(load(list))
        }
    } else {
        const res = await csrfFetch(`/api/gallery`, { method: "GET" });

        if (res.ok) {
            const list = await res.json();
            // console.log(Array.isArray(list))
            dispatch(load(list))
        }
    }

}

export const getSingleAircraft = (id) => async (dispatch) => {
    if (id) {
        const res = await csrfFetch(`/api/aircraft/${id}`);
    
        if (res.ok) {
            const aircraft = await res.json();
            dispatch(getAircraft(aircraft))
        }
    }
}

const initialState = {};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allAircraft = {};
            action.list.forEach((aircraft) => {
                return allAircraft[aircraft.id] = aircraft;
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