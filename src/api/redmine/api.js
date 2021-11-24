import storePromise from "../../store";
import axios from "axios";
import {setAccountAuth,setAccountFirstName,setAccountLastName} from "../../actions";

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

    const response = await axios.get(prepareForCall(getApiUrl()+"/users/current"),getRequestHeaders());

    // TODO: Something is wrong with saving First name and Last name.
    // Saving Account Auth works.!
    store.dispatch(setAccountAuth(false));
    store.dispatch(setAccountFirstName("test"));
    store.dispatch(setAccountLastName(response.data.user.lastname));

    console.log(response.data);
    console.log(response.data.user);
    console.log(response.data.user.firstname);
    console.log(store.getState().accountFirstName);
    console.log(store.getState().accountLastName);

    return response.data;
}


// TEST
//     axios.get(getApiUrl()+"/issues/76614.json",getRequestHeaders()).then(res => console.log(res))
