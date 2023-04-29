import React, { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function CreateEmployee() {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if(id === '_add'){
      return 
    }
    else{
      EmployeeService.getEmployeeById(id).then((res) => {
        let employee = res.data;
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setEmailId(employee.emailId);
      });
    }
  },[id]);

  const cancel = () => {
    navigate("/employees");
  };

  function saveEmployee(e) {
    e.preventDefault();

    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };

    if ( id === '_add')
    {      
    EmployeeService.postEmployees(employee).then((res) => {
      navigate("/employees");
    });
    }
    else
    {
      EmployeeService.updateEmployees(employee, id).then((res) => {
        navigate("/employees");
      });
    }
  }

  function changeFirstNameHandler(e) {
    setFirstName(e.target.value);
  }
  function changeLastNameHandler(e) {
    setLastName(e.target.value);
  }
  function changeEmailIdHandler(e) {
    setEmailId(e.target.value);
  }

  function getTitle(){
    if( id === '_add')
    {
      return <h3 className="text-center">Add Employee</h3>
    }
    else
    {
      return <h3 className="text-center">Update Employee</h3>
    }
  }

  return (
    <div>
      <br /> <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
             {
               getTitle()
             }
            <div className="card-body">
              <form onSubmit={saveEmployee}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={changeFirstNameHandler}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={changeLastNameHandler}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="EmailId"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={changeEmailIdHandler}
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={saveEmployee}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ margin: 5 }}
                  onClick={cancel}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default CreateEmployee;
