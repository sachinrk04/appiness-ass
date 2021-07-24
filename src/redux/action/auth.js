import * as actionTypes from '../../shared/actionTypes';
import authData from '../../data/auth.json';

export const authSuccess = (value) => {
    return {
        type: actionTypes.AUTH,
        data: value
    }
};

export const onAuth = (data) => {
    return dispatch => {
        let value = authData.find((au) => (au.username === data.username && au.password === data.password))
        if (value && value.username) {
            dispatch(authSuccess(true))
        } else {
            dispatch(authSuccess(false))
        }
    }
};


