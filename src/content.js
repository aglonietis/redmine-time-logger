import { createStore } from 'redux';
import storeCreatorFactory from 'reduxed-chrome-storage';
import reducers from './reducers';
import { setStats } from './actions/marker';
import { mark, unmark } from './mark';

let stateJson0;
let toUnmark = false;
let stats = false;

const render = (store, tabHidden) => {
    const o = store.getState();
    const {account, marker, settings} = o;
    // get a "slice" of the state to be used/tracked locally
    const state = {
        account: account && { keywords: account.keywords },
        marker: marker && { enabled: marker.enabled },
        settings
    };
    const stateJson = JSON.stringify(state);
    // if there is no changes in the state "slice" since the last call, early return
    if (stateJson === stateJson0)
        return false;
    const toMark = account.keywords && marker.enabled;
    // perform "unmark" operation, if it is applicable (i.e. if there was "mark" operation at the last call)
    if (toUnmark) {
        unmark();
    }
    stateJson0 = stateJson;
    if (tabHidden)
        return false;
    stats = false;
    // if "mark" operation is inapplicable, early return
    if (!toMark)
        return false;
    toUnmark = toMark;
    const {keywords} = account;
    const {matchWhole, matchCase} = settings;
    // perform "mark" operation and save its returning value in local stats variable
    stats = mark({
        keywords, matchWhole, matchCase, style: style(settings)
    });
    updateStats(store);
    return true;
};

const style = settings => {
    const {color, colorBg, bold, underline} = settings;
    const acc = [];
    color && acc.push( ['color', color] );
    colorBg && acc.push( ['background-color', colorBg] );
    (color || colorBg) && acc.push( ['padding', '0.2em'] );
    bold && acc.push( ['font-weight', 'bold'] );
    underline && acc.push( ['text-decoration', 'underline'] );
    return acc.map( v => v[0] + ':' + v[1] ).join( ';' );
};

// update "stats" property of the state with value of local stats variable
const updateStats = (store) => {
    stats && store.dispatch(setStats(stats));
};

(async () => {
    const store = await storeCreatorFactory({createStore})(reducers);

    chrome.runtime.onMessage.addListener( data => {
        // if current tab received focus, apply mark/unmark operations (if any),
        // then, if there was no mark operation, update marker stats
        data && data.id === 'tabFocusPass' &&
        !render(store) && updateStats(store);
    });

    store.subscribe(() => {
        render(store, document.hidden);
    });

    render(store);
})();
