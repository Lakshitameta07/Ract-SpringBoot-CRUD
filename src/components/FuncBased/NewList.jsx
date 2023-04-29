import React, { useState, useEffect } from "react";
import EmployeeService from "../../services/EmployeeService";
import {useNavigate} from "react-router-dom";


function NewList() {

  const [employees, setEmployees] = useState([]);
  let navigate = useNavigate()

  useEffect(() => {
   getList();
  }, []);

  function getList() {
    EmployeeService.getEmployees().then((result) => {
      setEmployees(result.data);
    });
  }

  const navEmp = () => {
    navigate ('/add-employees/_add');
  }

  function editEmployee(id){
      navigate(`/add-employees/${id}`);
  }

  function viewEmployee(id)
  {
    navigate (`/view-employees/${id}`);
  }

  function deleteEmployee(id){
    EmployeeService.deleteEmployees(id).then( res => {
      getList({employees : employees.filter(employee => employee.id !== id)});
    })
  }

  return (
    <div className="container-fluid">
      <h4 className="text-center">Employees List</h4>
      <div className="row-cols-auto">
        <button type="button" className="btn btn-outline-dark" onClick={navEmp}>
          AddEmployee
        </button>
      </div>
      <br />
      <div className="row">
        <table className="table table-striped table-bordered table-primary">
          <thead>
            <tr className="text-center">
              <th>Id</th>
              <th> First Name </th>
              <th> Last Name </th>
              <th> Email Id </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <button type="button" onClick={()=>editEmployee(employee.id)} className="btn  btn-dark btn-outline-info">
                    Update
                  </button>
                  <button style={{marginLeft:'10px'}} type="button" onClick={()=>deleteEmployee(employee.id)} className="btn btn-light btn-outline-danger">
                    Delete
                  </button>
                  <button style={{marginLeft:'10px'}} type="button" onClick={()=>viewEmployee(employee.id)} className="btn btn-dark btn-outline-info">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NewList;