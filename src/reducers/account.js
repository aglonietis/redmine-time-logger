import {ACCOUNT_AUTH, ACCOUNT_FIRST_NAME, ACCOUNT_LAST_NAME,ACCOUNT_LOGOUT} from '../actions/account';

const initialState = {
    authenticated: false,
    firstName: "",
    lastName: ""
};

export default function account(state = initialState, action) {
    const {type, data} = action;
    switch (type) {
        case ACCOUNT_AUTH:
            return {
                ...state,
                authenticated: Boolean(data)
            };
        case ACCOUNT_FIRST_NAME:
            return {
                ...state,
                firstName: data
            };
        case ACCOUNT_LAST_NAME:
            return {
                ...state,
                lastName: data
            };
        case ACCOUNT_LOGOUT:
            return {
                ...state,
                authenticated: Boolean(false),
                firstName: "",
                lastName: ""
            };
        default:
            return state;
    }
}
