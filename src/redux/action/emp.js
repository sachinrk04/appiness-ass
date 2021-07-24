import * as actionTypes from '../../shared/actionTypes';

export const empList = (data) => {
    return {
        type: actionTypes.EMP_LISTS,
        data: data
    }
};