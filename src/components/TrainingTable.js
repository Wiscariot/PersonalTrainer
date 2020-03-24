import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import Moment from 'moment';


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
    ]

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(res => res.json())
        .then(data => setTrainings(data))
        .then(err => console.error(err));
    }

    return(
        <div style={{maxWidth:'100%'}}>
            <MaterialTable 
                data={trainings} 
                columns={columns} 
                title="Customers"
                options={{ 
                    search: true,
                    
                }}    
            />
        </div>
    )
}