import storePromise from "../../store";
import axios from "axios";
import {setAccountAuth, setAccountFirstName, setAccountLastName, setAccountLogout} from "../../actions";
import {AUTH_AUTHENTICATED} from "../../constants/user";

let store = null;

function getApiUrl() {
    return store.getState().settings.apiUrl;
}

function getApiKey() {
    return store.getState().settings.apiKey;
}

function getRequestHeaders() {
    return {
        'X-Redmine-API-Key': getApiKey(),
        'Content-type': 'application/json',
        'Accept': 'application/json'
    };
}

function getRequestConfig() {
    return {
        headers: getRequestHeaders(),
        timeout: process.env.REACT_APP_API_TIMEOUT
    }
}

function prepareForCall(url) {
    return url + ".json";
}

export async function CheckAuthentication() {
    store = await storePromise;

    await axios.get(prepareForCall(getApiUrl()+"/users/current"),getRequestConfig())
        .then( response => {
            store.dispatch(setAccountAuth(AUTH_AUTHENTICATED));
            store.dispatch(setAccountFirstName(response.data.user.firstname));
            store.dispatch(setAccountLastName(response.data.user.lastname));
        })
        .catch(response => {
            store.dispatch(setAccountLogout());
        });

    return true;
}


// TEST
//     axios.get(getApiUrl()+"/issues/76614.json",getRequestHeaders()).then(res => console.log(res))
