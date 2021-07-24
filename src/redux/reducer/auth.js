import * as actionTypes from '../../shared/actionTypes';

const initialState = {
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH:
            return {
                ...state,
                isAuth: action.data
            }
        default:
            return state;
    }
}

export default authReducer; 