import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {EmployeeRegPop} from './EmployeeRegPop';
import { Employeeedit} from './Employeeedit';


class  EmployeeDetails extends Component {
   constructor(props) {
       super(props);
       this.state = { Employees:[],EmployeeeditShow:false,EmployeeRegPopShow:false
       }
   }
   componentWillMount(){
       this.refresList();
   }

   refresList(){
        fetch('http://localhost:59388/api/employees')
        .then(Response =>Response.json())
        .then(data=>{
            this.setState({Employees:data});
        });
   }
//    componentDidUpdate(){
//     this.refresList();
// }
DeleteEmployee(id){
    if(window.confirm('Are you sure? ')){
      fetch('http://localhost:59388/api/employees/' + id,{
        method:'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      })
    }
  }

   render() {
       const {Employees,employeeId,FirstName,LastName,Address,Birthdate,ContactInfo,Gender,RegistrationNo,CreatedOn,positionName} = this.state;
       let addModalClose =() => this.setState({addModalShow:false});
       let EmployeeeditClose =() => this.setState({EmployeeeditShow:false});
       return (
           <div className = "patientdetailstable">
               <h4>Employee Details</h4>
               <ButtonToolbar>
                    <Button variant = 'primary'
                    onClick ={()=>this.setState({addModalShow:true})}
                    >
                    Add Employee
                    </Button>
                    <EmployeeRegPop
                        show = {this.state.addModalShow}
                        onHide={addModalClose}
                    />
               </ButtonToolbar>
               <Table className="mt-4" striped bordered hover size="sm">
                   <thead>
                       <tr>
                           <th>Employee Id</th>
                           <th>Name</th>
                           <th>Registration No</th>
                           <th>Position</th>
                           <th>Address</th>
                           <th>Contact Info</th>
                           <th>Created On</th>
                           <th>Options</th>
                       </tr>
                   </thead>
                   <tbody>
                       {Employees.map(Employees =>
                        <tr  key ={Employees.employeeId}>
                                <td>{Employees.employeeId}</td>
                               <td>{Employees.firstName} {Employees.lastName}</td>
                               <td>{Employees.registrationNo}</td>
                               <td>{Employees.positionName}</td>
                               <td>{Employees.address}</td>
                               <td>{Employees.contactInfo}</td>
                               <td>{Employees.createdOn}</td>
                               
                               {/* <td>{Employees.Birthdate}</td> */}
                               <td>
                                   <ButtonToolbar>
                                       <Button className = "mr-2" variant ="info"
                                    onClick={()=>this.setState({EmployeeeditShow:true,
                                        id:Employees.employeeId,
                                        FirstName:Employees.firstName,
                                        LastName:Employees.lastName,
                                        RegistrationNo:Employees.registrationNo,
                                        ContactInfo:Employees.contactInfo,
                                        CreatedOn:Employees.CreatedOn,
                                        Address:Employees.address,
                                        // Birthdate:Employees.Birthdate,
                                        Gender:Employees.gender,
                                        PosiitionId:Employees.positionName
                                        })}
                                       >Edit</Button>

                                       <Button className="mr-2"  onClick = {()=>this.DeleteEmployee(Employees.employeeId)} variant ="danger">Delete</Button>
                                       <Employeeedit
                                           show={this.state.EmployeeeditShow}
                                            onHide ={EmployeeeditClose}
                                            id  = {employeeId}
                                            FirstName  = {FirstName}
                                            LastName = {LastName}
                                            RegistrationNo = {RegistrationNo}
                                            ContactInfo = {ContactInfo}
                                            CreatedOn = {CreatedOn}
                                            Address = {Address}
                                            Gender = {Gender}
                                            Birthdate = {Birthdate}
                                            PoistionId = {positionName}
                                       />
                                   </ButtonToolbar>
                               </td>
                           </tr>
                       )}
                   </tbody>
               </Table>
               </div>
       )
   }
}

export default EmployeeDetails

