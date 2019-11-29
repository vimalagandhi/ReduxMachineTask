
import axios from 'axios';
//import data from '../../src/data/employees.json'

class BaseServiceApi {

    processGetServiceCall = (request) => new Promise((resolve, reject) => {
        axios.get(`employees.json`).then(response => {
            console.log(response);
            resolve(response);
         })
            .catch((error) => {
                // alert(error);
                reject(error);
            });
    })

    getBaseURL = () => process.env.SERVICEAPI
}

const baseServiceApi = new BaseServiceApi();
export default baseServiceApi;
