import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const App = () => 
  <div className='App'>  
    <Route path='/' component={HomePage} />
  </div>



export default App;
