import {getStore} from "../../store";
import axios from "axios";

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
    store = await getStore();

    const response = await axios.get(prepareForCall(getApiUrl()+"/users/current"),getRequestHeaders());

    return response.data;
}


// TEST
//     axios.get(getApiUrl()+"/issues/76614.json",getRequestHeaders()).then(res => console.log(res))
