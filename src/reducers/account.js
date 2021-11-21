import {ACCOUNT_AUTH} from '../actions/account';

const initialState = {
    authenticated: false
};

export default function account(state = initialState, action) {
    const {type, data} = action;
    switch (type) {
        case ACCOUNT_AUTH:
            return {
                ...state,
                authenticated: Boolean(data)
            };
        default:
            return state;
    }
}
