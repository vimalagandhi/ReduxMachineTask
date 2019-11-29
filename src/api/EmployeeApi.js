import BaseServiceApi from './BaseServiceApi';

class EmployeeApi {
    getEmployeeData() {
        const request = { Name: "employees", data: {} };
        return BaseServiceApi.processGetServiceCall(request);
    }
}


const EmployeeServiceApi = new EmployeeApi();
export default EmployeeServiceApi;