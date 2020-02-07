import React from 'react';
import './display-employee.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const DisplayEmployee = ({employee,deleteEmployee}) => (
    <div className='display-employee'>
      <div className='display-details'>
        <label className='id'>{employee.id}</label>
        <label className='name'>{employee.employee_name}</label>
        <label className='salary'>{employee.employee_salary}</label>
        <label className='age'>{employee.employee_age}</label>
      </div>

      <CustomButton  onClick={()=> deleteEmployee(employee.id)}
        >
        Delete
        </CustomButton>
    </div>
)

export default DisplayEmployee;
