import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function AppHeader() {

  const style = {
    maxWidth:'85%', 
    margin: 'auto', 
    marginTop: '10px', 
    borderRadius:'5px',
    background: 'red',
    opacity: '.75'
  }


    return (
        <div>
          <AppBar 
          style={style} 
          position="static">
            <Toolbar>
              <Typography variant="h6">
                Personal Trainer
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
}