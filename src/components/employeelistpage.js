import React, { Component } from 'react';
import { getEmployeeData } from '../action/actions'
import { connect } from 'react-redux';
import {withRouter} from 'react-router'


class EmployeeList extends Component {
  componentDidMount() {
    this.props.getEmployeeData()
  }

  renderData = (empData) => (<tr key={empData.id}>           
    <td>{empData.id}</td>
    <td>{empData.name}</td>
    <td>{empData.age}</td>
    <td>{empData.gender}</td>
	<td>{empData.email}</td>
	<td>{empData.phoneNo}</td>
</tr>)

  render() {

    return (
      <div><div style={{padding: '10px', background: '#fff'}}>
        <h3>Employee List</h3>
      <table className="table table-bordered table-sm ins-table">
          <thead>
              <tr className="table-active">                            
                  <th>Id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
				  <th>Email</th>
				  <th>Phone Number</th>
              </tr>
          </thead>
          <tbody>
              
              {this.props.empData.map(this.renderData)}
          </tbody>
      </table>
  </div></div>
    )
  }
}

function mapStateToProps(state) {
  return { empData: state.employee.empData};
}

const mapDispatchToProps = (dispatch) => ({
  getEmployeeData: () => dispatch(getEmployeeData()),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeeList));
