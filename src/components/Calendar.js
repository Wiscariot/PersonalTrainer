import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import css from 'react-big-calendar/lib/css/react-big-calendar.css';
 

export default function TrainingCalendar(props) {
    const localizer = momentLocalizer(moment)
    moment.locale();
    
    const [trainings, setTrainings] = useState([]);
    const [training, setTraining] = useState({
        title: '',
        start: '',
        end: '',
    })

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(res => res.json())
        .then(data => setTrainings(data))
        .then(err => console.error(err));
    }

    useEffect(() => fetchData(), []);

    const trainingEvents = trainings.map( training => (
            {
                title: training.customer.firstname + ' ' + training.customer.lastname + ':  ' + training.activity,
                start: `${training.date}`,
                end: `${moment(training.date).add(training.duration, 'minutes')}` 
            
        }));    
    
    
    return(
        <div>
            <Calendar
            localizer={localizer}
            events={trainingEvents}
            startAccessor="start"
            endAccessor="end"
            style={{css, height: 500 }}
            />
        </div>
    )
}