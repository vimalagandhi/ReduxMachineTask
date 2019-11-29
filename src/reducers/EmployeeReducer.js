import { Constants } from '../constants/constants'

const { ActionTypes } = Constants;

const initialState = {
    empData: []

}

export default function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_EMPLOYEE_DATA_SUCCESS:
            return { ...state, empData: action.result };
        default:
            return state;
    }
}