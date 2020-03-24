import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link as RouterLink} from 'react-router-dom';
import {MemoryRouter as Router} from 'react-router-dom';

export default function TabNavigation() {
 // const [value, setValue] = useState("customers");

 /* const handleChange = (event, newValue) => {
    setValue(newValue);
  };*/

  return (
   <Router>
    <Paper>
      <Tabs
        //value={value}
        //onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Customers" value="customers" href="/customers"/>
        <Tab label="Trainings" value="trainings" href="/" /> 
      </Tabs>
    </Paper>
   </Router> 
  );
}

