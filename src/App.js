import React from 'react';
import './App.css';
import HomePage from './Pages/home-page/home-page.page';
import CreateEmployee from './Pages/create-employee/create-employee.page';

import {Switch, Route} from 'react-router-dom';

  const App = () =>  (
        <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/create-employee' component={CreateEmployee}/>
        </Switch>

        </div>)

export default App;
