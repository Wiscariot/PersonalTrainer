import React from 'react';
import CustomersTable from './components/CustomersTable';
import TrainingTable from './components/TrainingTable';
import TrainingCalendar from './components/Calendar';
import AppHeader from './components/AppHeader';
import TabNavigation from './components/TabNavigation';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

function App() {

  const style = {
    width: "100%",
    height: "400px",
  }

  return (
    <div styles={style} className="App">
      <AppHeader />
      
      <BrowserRouter>
        <TabNavigation/> 
          <Switch>
            <Route exact path="/"   component={() => <TrainingTable/>}/>
            <Route path="/customers" component={() => <CustomersTable/>} />
            <Route path="/calendar" component={() => <TrainingCalendar/>} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
