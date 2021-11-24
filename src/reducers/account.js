import {ACCOUNT_AUTH, ACCOUNT_FIRST_NAME, ACCOUNT_LAST_NAME} from '../actions/account';
import {DEFAULT_FIRST_NAME, DEFAULT_LAST_NAME} from "../constants/user";

const initialState = {
    authenticated: false,
    accountFirstName: DEFAULT_FIRST_NAME,
    accountLastName: DEFAULT_LAST_NAME
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
                accountFirstName: data
            };
        case ACCOUNT_LAST_NAME:
            return {
                ...state,
                accountLastName: data
            };
        default:
            return state;
    }
}
