export const ACCOUNT_AUTH = 'ACCOUNT_AUTH';
export const ACCOUNT_FIRST_NAME = 'ACCOUNT_FIRST_NAME';
export const ACCOUNT_LAST_NAME = 'ACCOUNT_LAST_NAME';
export const ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT';

export const setAccountAuth = data => ({
    type: ACCOUNT_AUTH, data
});

export const setAccountFirstName = data => ({
    type: ACCOUNT_FIRST_NAME, data
});

export const setAccountLastName = data => ({
    type: ACCOUNT_LAST_NAME, data
});

export const setAccountLogout = () => ({
    type: ACCOUNT_LOGOUT
});
