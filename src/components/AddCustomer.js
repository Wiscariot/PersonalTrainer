import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';


export default function AddCustomer(props) {
  const [open, setOpen] = React.useState(false);
  const [customer, setCustomer] = useState({
    firstname:'',
    lastname:'',
    streetaddress:'',
    postcode:'',
    city:'',
    email:'',
    phone:'',
    link:'https://customerrest.herokuapp.com/api/customers'
});

  const handleClickOpen = () => setOpen(true);
  

  const handleClose = () => setOpen(false);
  const handleInputChange = (e) => setCustomer({...customer, [e.target.name]: e.target.value});

  const updateCustomer = (customer, link, method) => {
    props.updateCustomer(customer, link, method);
    handleClose()
  }


    return(
    <div>
      
      <Tab label="Add New Customer" style={{color:'red'}} value="trainings" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        
        <DialogTitle id="form-dialog-title">Edit Customer</DialogTitle>
        
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            name="firstname"
            label="Firstname"
            value={customer.firstname}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
        
          <TextField
            margin="dense"
            name="lastname"
            label="Lastname"
            value={customer.lastname}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="streetaddress"
            label="Streetaddress"
            value={customer.streetaddress}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="postcode"
            label="postcode"
            value={customer.postcode}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="city"
            label="City"
            value={customer.city}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            value={customer.email}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone"
            value={customer.phone}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => updateCustomer(customer, customer.link, 'POST')}  color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}