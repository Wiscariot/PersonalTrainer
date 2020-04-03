import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import Moment from 'moment';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/Iconbutton'
import DeleteButton from '@material-ui/icons/Delete';
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


export default function CustomersTable(props) {
    const [trainings, setTrainings] = useState([]);
    useEffect(() => fetchData(), []);

    const columns = [
        {title:'date', field: 'date',
         render: date => { return Moment(date.timestamp)
            .local()
            .format('DD.MM.YYYY, hh:mm a');
        }},
        {title:'duration', field: 'duration'},
        {title:'activity', field: 'activity'},
        {title:'customer', field: 'customer.firstname, customer.lastname',
         render: row => <span>{row.customer.firstname} {row.customer.lastname}</span>
        },
        { field: 'id', render: row =>  
        <IconButton onClick={() => deleteTraining(row, `https://customerrest.herokuapp.com/api/trainings/${row.id}`, 'DELETE')}><DeleteButton/></IconButton>
        },
    ]
    
    const deleteTraining = (el, link, method) => {if (window.confirm('Are you sure?')) {
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

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(res => res.json())
        .then(data => setTrainings(data))
        .then(err => console.error(err));
    }

    const style = {
        margin:'auto', 
        marginTop:'50px', 
        maxWidth:'85%',
        background:'black',
        opacity:'0.8'
    }
    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const message = `You deleted Training`;
    const [popUp, setPopUp] = useState(false);
    const handlePopup = () => setPopUp(true);
    const popupClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setPopUp(false);
    };

    return(
        <div style={style}>
            <MaterialTable 
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
                data={trainings} 
                columns={columns} 
                title="Trainings"
                options={{
                        search: true,
                        pageSize: 10,
                        pageSizeOptions: [10,15,20],
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