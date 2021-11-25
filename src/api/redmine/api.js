import storePromise from "../../store";
import axios from "axios";
import {setAccountAuth, setAccountFirstName, setAccountLastName, setAccountLogout} from "../../actions";

let store = null;

function getApiUrl() {
    return store.getState().settings.apiUrl;
}

function getApiKey() {
    return store.getState().settings.apiKey;
}

function getRequestHeaders() {
    return {
        headers: {
            'X-Redmine-API-Key': getApiKey(),
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    }
}

function prepareForCall(url) {
    return url + ".json";
}

export async function CheckAuthentication() {
    store = await storePromise;

    await axios.get(prepareForCall(getApiUrl()+"/users/current"),getRequestHeaders())
        .then( response => {
            store.dispatch(setAccountAuth(true));
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
