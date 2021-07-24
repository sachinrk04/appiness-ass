import * as actionTypes from '../../shared/actionTypes';

const initialState = {
    empList: []
};

const empsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EMP_LISTS:
            return {
                ...state,
                empList: action.data
            }
        default:
            return state;
    }
}

export default empsReducer; 