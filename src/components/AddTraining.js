import React, {useState} from 'react';
import Moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


export default function AddCustomer(props) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState([]);
  const [training, setTraining] = useState({
    date:'',
    activity:'',
    duration:'',
    customer:`${props.customer.links[0].href}`,
    
});

  const handleClickOpen = () => setOpen(true);
  

  const handleClose = () => setOpen(false);
  const handleInputChange = (e) => setTraining({...training, [e.target.name]: e.target.value});

  const updateTraining = (element, link, method) => {
    handleDate();
    
    fetch(link, {
        method: method,
        headers: {
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(element)
    })
    .catch(err => console.error(err))
    handleClose()
  }

  const handleDate = () => {
      const parseDate = Moment().toISOString(training.date);
        setTraining({...training, date:parseDate});
    }
    
    return(
    <div>
      
      <IconButton onClick={handleClickOpen} size="small" aria-label="delete">
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        
        <DialogTitle id="form-dialog-title">Edit Customer</DialogTitle>
        
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            name="date"
            value={training.date}
            onChange={(e) => handleInputChange(e)}
            type="date"
            fullWidth
          />
        
          <TextField
            margin="dense"
            name="duration"
            label="Duration"
            value={training.duration}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="activity"
            label="Activity"
            value={training.activity}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="customer"
            label="Customer"
            disabled
            value={`${props.customer.firstname} ${props.customer.lastname}`}
            type="text"
            fullWidth
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => updateTraining(training, 'https://customerrest.herokuapp.com/api/trainings', 'POST')}  color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}