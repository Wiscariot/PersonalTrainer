import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';


export default function EditCustomer(props) {
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = useState({
      firstname:'',
      lastname:'',
      streetaddress:'',
      postcode:'',
      city:'',
      email:'',
      phone:'',
      link:''
  });

    useEffect(() => fetchData(), []);

    const fetchData = (link) => {
      fetch(link)
      .then(res => res.json())
      .then(data => setCustomer(data.content))
      .then(err => console.error(err));
  }

    const handleClickOpen = () => {
        
        setCustomer({
            firstname:props.customer.firstname,
            lastname:props.customer.lastname,
            streetaddress:props.customer.streetaddress,
            postcode:props.customer.postcode,
            city:props.customer.city,
            email:props.customer.email,
            phone:props.customer.phone,
            link:props.customer.links[0].href
        })
        setOpen(true)
    }

    const handleClose = () => setOpen(false);
    const handleInputChange = (e) => setCustomer({...customer, [e.target.name]: e.target.value});

    const updateCustomer = (customer, link, method) => {
      props.updateCustomer(customer, link, method);
      handleClose()
    }


    return(
    <div>
      <IconButton onClick={handleClickOpen} size="small" aria-label="delete">
        <EditIcon />
      </IconButton>
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
          <Button onClick={() => updateCustomer(customer, customer.link, 'PUT')}  color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}