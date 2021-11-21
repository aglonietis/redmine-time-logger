import {combineReducers} from 'redux';

import account from './account';
import settings from './settings';

const reducers = combineReducers({
    account,
    settings
});
export default reducers;
