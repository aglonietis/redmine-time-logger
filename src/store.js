import storeCreatorFactory from "reduxed-chrome-storage";
import {createStore} from "redux";
import reducers from "./reducers";

let readyStore = null;

const asyncStoreCreator = storeCreatorFactory({createStore});
const storePromise = asyncStoreCreator(reducers);


export async function getStore() {
    if(readyStore == null) {
        readyStore = await storePromise;
    }

    return readyStore;
}

export default storePromise;
