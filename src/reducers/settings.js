import {SET_API_KEY, SET_API_URL} from '../actions/settings';

const initialState = {
    apiUrl: "",
    apiKey: ""
};

export default function settings(state = initialState, action) {
    const {type, data} = action;
    switch (type) {
        case SET_API_URL:
            return {
                ...state,
                apiUrl: data
            };
        case SET_API_KEY:
            return {
                ...state,
                apiKey: data
            };
        default:
            return state;
    }
}
