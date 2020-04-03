import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link as RouterLink} from 'react-router-dom';
import {MemoryRouter as Router} from 'react-router-dom';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AddCustomer from './AddCustomer';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import CustomersTable from './CustomersTable';
import TrainingTable from './TrainingTable';

export default function TabNavigation(props) {
 const [value, setValue] = useState(1);

 /* const handleChange = (event, newValue) => {
    setValue(newValue);
  };*/

  return (
   <Router>
    <Paper>
      <Tabs
        //value={1}
        //onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Customers"  href="/customers"/>
        <Tab label="Trainings"  href="/" />
        <Tab label="Calendar"  href="/calendar" />
      </Tabs>
    </Paper>
    
   </Router> 
  );
}

