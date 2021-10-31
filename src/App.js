import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import MainPage from './pages/main/main-page.component';
import RegistrosPage from './pages/registros/registros-page.component';

import './App.css';

const App = () => 
  <div className='App'>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/main' component={MainPage} />
      <Route path='/registros' component={RegistrosPage} />
    </Switch>
  </div>



export default App;
