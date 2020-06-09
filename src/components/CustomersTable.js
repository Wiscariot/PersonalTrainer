import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/Iconbutton'
import DeleteButton from '@material-ui/icons/Delete';
import EditCustomer from './EditCustomer';
import AddCustomer from './AddCustomer';
import AddTraining from './AddTraining';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Search from '@material-ui/icons/Search'
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import '../style.css'

export default function CustomersTable(props) {
const [customers, setCustomers] = useState ([]);


    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(res => res.json())
        .then(data => setCustomers(data.content))
        .then(err => console.error(err));
        
    }

    const deleteCustomer = (el, link, method) => {if (window.confirm('Are you sure?')) {
        handlePopup()
        updateCustomer(el, link, method)
        }
    }

    const updateCustomer = (element, link, method) => {
        fetch(link, {
            method: method,
            headers: {
                'Content-Type':'application/json' 
            },
            body: JSON.stringify(element)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    useEffect(() => fetchData(), []);

    const columns = [
        {   
            field: 'id',
            render: row =>  <ButtonGroup size="small" aria-label="small outlined button group">
                                <EditCustomer customer={row} updateCustomer={updateCustomer}/>
                                <IconButton onClick={() => deleteCustomer(row, row.links[0].href, 'DELETE')}><DeleteButton/></IconButton>
                                <AddTraining customer={row}/>
                            </ButtonGroup>
            },
        {title: 'firstname', field: 'firstname', 'width': 100},
        {title: 'lastname', field: 'lastname'},
        {title: 'streetaddress', field: 'streetaddress'},
        {title: 'postcode', field: 'postcode'},
        {title: 'city', field: 'city'},
        {title: 'email', field: 'email'},
        {title: 'phone', field: 'phone'},
    ]

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
    const message = `You deleted customer`;
    const [popUp, setPopUp] = useState(false);
    const handlePopup = () => setPopUp(true);
    const popupClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setPopUp(false);
    };

    return(
        <div style={{maxWidth:'85%', margin: 'auto'}}>
            <AddCustomer updateCustomer={updateCustomer} />
            <MaterialTable 
                columns={columns} 
                data={customers} 
                title="Customers"
                MaterialTable
          icons={{ 
                    Check: Check,
                    DetailPanel: ChevronRight,
                    Delete: DeleteOutline,
                    Export: SaveAlt,
                    Filter: FilterList,
                    FirstPage: FirstPage,
                    LastPage: LastPage,
                    NextPage: ChevronRight,
                    PreviousPage: ChevronLeft,
                    Search: Search,
                    ThirdStateCheck: Remove,
                    Add: Add,
                    SortArrow: ArrowDownward,
                    Clear: Clear,
                    Edit: Edit,
                    ViewColumn: ViewColumn
                }}
                options={{ 
                    search: true,
                    pageSize: 10,
                    pageSizeOptions: [10,15,20]
                }}    
            />
        <Snackbar open={popUp} autoHideDuration={6000} onClose={popupClose}>
        <Alert onClose={popupClose} severity="success">
            {message}
        </Alert>
        </Snackbar>
        </div>
    )
}