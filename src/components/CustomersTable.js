import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import IconButton from '@material-ui/core/Iconbutton'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteButton from '@material-ui/icons/Delete';
import EditCustomer from './EditCustomer';
import AddCustomer from './AddCustomer';
import AddTraining from './AddTraining';

export default function CustomersTable(props) {
const [customers, setCustomers] = useState ([]);


    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(res => res.json())
        .then(data => setCustomers(data.content))
        .then(err => console.error(err));
        
    }

    const deleteCustomer = (el, link, method) => {if (window.confirm('Are you sure?')) {
        updateCustomer(el, link, method)
    }}

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
        {title: 'firstname', field: 'firstname'},
        {title: 'lastname', field: 'lastname'},
        {title: 'streetaddress', field: 'streetaddress'},
        {title: 'postcode', field: 'postcode'},
        {title: 'city', field: 'city'},
        {title: 'email', field: 'email'},
        {title: 'phone', field: 'phone'},
    ]

    return(
        <div style={{maxWidth:'100%'}}>
            <AddCustomer updateCustomer={updateCustomer} />
            <MaterialTable 
                columns={columns} 
                data={customers} 
                title="Customers"
                options={{ 
                    search: true,
                    
                }}    
            />
        </div>
    )
}