import {
     SET_API_URL, SET_API_KEY
} from '../actions/settings';

const initialState = {
    appName: "Redmine Time Logger",
    apiUrl: "something",
    apiKey: "something"
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
