import React from 'react';
import './home-page.styles.scss';
import DisplayEmployee from '../../Components/display-employee/display-employee.component'
import { Link } from 'react-router-dom';
import CustomButton from '../../Components/custom-button/custom-button.component';

class HomePage extends React.Component {
  constructor(){
    super();

    this.state = {employees:[]
                  }
    }
    componentDidMount() {
      fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(res =>res.json())
        .then(data =>{
          this.setState({employees: data.data}); console.log(this.state.employees)});
    }

    deleteEmployee = (id) => {
      console.log('delete', id);
       fetch(`http://dummy.restapiexample.com/api/v1/delete/${id}`, {
            method: 'delete',
        })
        .then(res=>res.json())
        .then(data=> {console.log(data)})
        .then(fetch("http://dummy.restapiexample.com/api/v1/employees")
          .then(res =>res.json())
          .then(data =>{
            this.setState({employees: data.data})
          }))

    }

    render(){
      return(
        <div className='home-page'>
          <Link to="/create-employee" className='home-page--link-button'>
            <CustomButton type="button">
              Add Employee
            </CustomButton>
          </Link>
          <div className='employee-list'>
            {this.state.employees.map((employee)=> (
              <DisplayEmployee key={employee.id} employee={employee} deleteEmployee={this.deleteEmployee} />
            ) )}
          </div>
        </div>
      )
    }
  }

  export default HomePage;
