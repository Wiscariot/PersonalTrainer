import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';

export default function CustomersTable() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const columns = [
        {title: 'firstname', field: 'firstname'},
        {title: 'lastname', field: 'lastname'},
        {title: 'streetaddress', field: 'streetaddress'},
        {title: 'postcode', field: 'postcode'},
        {title: 'city', field: 'city'},
        {title: 'email', field: 'email'},
        {title: 'phone', field: 'phone'},
    ]

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(res => res.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err));
    }


    return(
        <div style={{maxWidth:'100%'}}>
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