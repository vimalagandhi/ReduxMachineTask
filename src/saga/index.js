import { fork, all } from 'redux-saga/effects'; 
import { watchGetEmployeeData } from "./Employee/Employee"

export default function* rootSaga() {
    yield all([
        fork(watchGetEmployeeData)
    ])
  }