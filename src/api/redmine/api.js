import { useSelector } from 'react-redux'

// import { createStore } from 'redux';
// import storeCreatorFactory from 'reduxed-chrome-storage';
// import reducers from './reducers';
// import { accountAuth } from './actions';
//
// const storeCreator = storeCreatorFactory({createStore});
// let store;
// const getStore = async () => {
//     if (store)
//         return store;
//     store = await storeCreator(reducers);
//     return store;
// };
//
// chrome.runtime.onStartup.addListener(async () => {
//     const store = await getStore();
//     // reset user session:
//     store.dispatch(accountAuth());
// });
//
// chrome.tabs.onActivated.addListener(async data => {
//     const {tabId} = data;
//     if (!tabId)
//         return;
//     const store = await getStore();
//     const state = store.getState();
//     const {account, marker} = state;
//     const toMark = account.keywords && marker.enabled;
//     if (!toMark)
//         return;
//     // reset marker stats:
//     store.dispatch(setStats(false));
//     // pass focus to active tab:
//     chrome.tabs.sendMessage(tabId, {id: 'tabFocusPass'});
// });
//
// (async () => {
//     const store = await getStore();
//     store.subscribe(() => {
//     });
// })();
