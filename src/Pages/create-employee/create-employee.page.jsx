import React from 'react';
import './create-employee.styles.scss';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';


import FormInput from '../../Components/form-input/form-input.component';
import CustomButton from '../../Components/custom-button/custom-button.component';


class AddEmployee extends React.Component {
  constructor() {
    super() ;

    this.state = {
      name:'',
      salary:'',
      age:''
    }
  }


  handleSubmit =  event => {
      event.preventDefault();
      const data = { name:this.state.name, salary:this.state.salary, age:this.state.age };

    fetch("http://dummy.restapiexample.com/api/v1/create", {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(data)})
        .then(res => res.json())
        .catch(error => console.error("‘Error:’", error))
        .then(response =>{ response.status === 'success' ? this.props.history.push("/"): console.error("‘Error:’")})



}

  handleChange = event => {
    const {name,value} = event.target;
    this.setState({[name]:value})
  }

  render() {
    return(
      <div className='create-employee-page'>

      <Link to="/">
          <span className='back-arrow' >&#8592;</span>
      </Link>
      <h2>Create a new Employee</h2>
      <div className='form'>
      <form onSubmit = {this.handleSubmit}>
      <FormInput
        name="name"
        type="text"
        value={this.state.name}
        handleChange={this.handleChange}
        label='Name'
        required/>
      <FormInput
        name="salary"
        type="number" min="0"
        value={this.state.salary}
        handleChange={this.handleChange}
        label='Salary'
        required/>
      <FormInput
          name="age"
          type="number" min="0"
          value={this.state.age}
          handleChange={this.handleChange}
          label='Age'
          required/>
        <CustomButton type="submit" >Submit</CustomButton>
      </form>
      </div>
      </div>

    )
  }
  }

export default withRouter(AddEmployee);
