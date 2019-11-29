import { put, call, takeLatest, all } from 'redux-saga/effects';
import {Constants} from "../../constants/constants"
import EmployeeApi from "../../api/EmployeeApi"
const { ActionTypes } = Constants;

export function* watchGetEmployeeData() {
    yield takeLatest(ActionTypes.GET_EMPLOYEE_DATA, handleGetEmployeeData);
}

function* handleGetEmployeeData() {
    try {
        const resultData = yield call(EmployeeApi.getEmployeeData);

        if (resultData.data !== null) {
            yield put({
                type: ActionTypes.GET_EMPLOYEE_DATA_SUCCESS,
                result: resultData.data
            });
        }
    }
    catch (error) {
        
    }
}