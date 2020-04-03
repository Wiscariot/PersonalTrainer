import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SportsIcon from '@material-ui/icons/Sports';

export default function AppHeader() {

    return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <SportsIcon style={{marginRight:'15px'}} fontSize="large" />
              <Typography variant="h6">
                Personal Trainer
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
}