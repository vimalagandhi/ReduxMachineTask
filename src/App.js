import React from 'react';
import './App.css';
import Login from './components/loginpage'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
               
                <Login {...this.props} />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
