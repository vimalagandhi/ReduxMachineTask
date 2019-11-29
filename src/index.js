import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';
import { Route, BrowserRouter} from "react-router-dom";
import Emp from './components/employeelistpage'

ReactDOM.render(<Provider store={store}>
    <BrowserRouter >
        <div>
            <Route exact path="/" component={App} />            
            <Route exact path="/emp" component={Emp} />
        </div>
    </BrowserRouter>
 </Provider>, document.getElementById('root'));


