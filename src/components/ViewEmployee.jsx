import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import EmployeeService from "../services/EmployeeService";

function ViewEmployee() {

    const {id} = useParams();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      EmployeeService.getEmployeeById(id).then( res => {
        setEmployees(res.data);
      })
    }, [id])

  return (
    <div><br/><br/>
        <div style={{background:'#6D5D6E'}} className='card col-md-6 offset-md-3'>
            <h3 style={{color:'#F4EEE0'}} className='text-center'>View Employee</h3>
            <div className='card-body'>
                <div className='row'>
                    <label style={{color:'#F4EEE0'}} className='form-label'>FirstName: {employees.firstName}</label>
                </div>
                <div className='row'>
                    <label style={{color:'#F4EEE0'}} className='form-label'>LastName: {employees.lastName}</label>
                </div>
                <div className='row'>
                    <label style={{color:'#F4EEE0'}} className='form-label'>EmailId: {employees.emailId}</label>
                </div>
            </div>
        </div><br/><br/>
    </div>
  )
}

export default ViewEmployee