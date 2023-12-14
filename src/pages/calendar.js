import Api from 'src/api';
import React, {useEffect} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
// import extract from './events';
import { createSearchParamsBailoutProxy } from 'next/dist/client/components/searchparams-bailout-proxy';
const localizer = momentLocalizer(moment)

const Basic = (props) => {
  const [eventList, setEventList] = React.useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get('/task');
        const tasks = response.data;
        console.log(tasks);
        const events = tasks.map((task) => (
          {
            id: task.id,
            title: task.title,
            start: new Date(task.start_date_time),
            end: new Date(task.end_date_time)
          }
        ))
        setEventList(events);
        console.log(events)
      } catch(error) {
        console.error('Error fetching data;', error);
      }
    };
    fetchData();
  }, []);
  return  (
  <div>
    <Calendar
      localizer={localizer}
      events={eventList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 960 }}
    />
  </div>
  );
};

// Basic.propTypes = {
// };

Basic.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Basic;