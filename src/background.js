import storePromise from "./store";
import {CheckAuthentication} from './api/redmine/api';

chrome.runtime.onStartup.addListener(async () => {
    await CheckAuthentication()
});
