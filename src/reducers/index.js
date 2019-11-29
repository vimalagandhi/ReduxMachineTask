import { combineReducers } from 'redux';
import EmployeeReducer from './EmployeeReducer';

const rootReducer = combineReducers({
    employee : EmployeeReducer
})

export default rootReducer;