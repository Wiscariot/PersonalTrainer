import React, {} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';


  
  export default function PopUp(props) {
    const [popUp, setPopUp] = useState(false);
  
    const handlePopup = () => {
      setPopUp(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setPopUp(false);
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClick}>
          Open success snackbar
        </Button>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {props.message}
          </Alert>
        </Snackbar>
        <Alert severity="error">This is an error message!</Alert>
        <Alert severity="warning">This is a warning message!</Alert>
        <Alert severity="info">This is an information message!</Alert>
        <Alert severity="success">This is a success message!</Alert>
      </div>
    );
  }