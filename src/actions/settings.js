export const SET_API_URL = 'SET_API_URL';
export const SET_API_KEY = 'SET_API_KEY';

export const setApiUrl = data => ({
    type: SET_API_URL, data
});

export const setApiKey = data => ({
    type: SET_API_KEY, data
});
