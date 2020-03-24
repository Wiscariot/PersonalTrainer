import React, {useState, useEffect} from 'react';
import './App.css';
import CustomersTable from './components/CustomersTable';
import TrainingTable from './components/TrainingTable';
import AppHeader from './components/AppHeader';
import TabNavigation from './components/TabNavigation';
import {Switch, Route, Link, BrowserRouter} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <AppHeader />
      
      <BrowserRouter>
      <TabNavigation />
      
          <Switch>
            <Route exact path="/" component={TrainingTable} />
            <Route path="/customers" component={CustomersTable} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
