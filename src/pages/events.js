// {
//     id: 0,
//     title: 'Available for Clients',
//     start: new Date(2023, 11, 14, 6),
//     end: new Date(2023, 11, 14, 18),
// }
export default function extract(data) {
    const events = [];
    let id = 0;
    
    for (let i = 0; i < data.length; i++) {
      const event = data[i];
      
      const date = event.date;
      const start_time = event.start_date_time.split(' ')[1];
      const end_time = event.end_date_time.split(' ')[1];
      
      const start_datetime = new Date(`${date} ${start_time}`);
      const end_datetime = new Date(`${date} ${end_time}`);
      
      const new_event = {
        id: id++,
        title: event,task,
        start: start_datetime,
        end: end_datetime,
      };
      
      events.push(new_event);
    }
    
    return events;
  }
  
  // Call the extract function with the data and store the extracted events

  
  // You can now use the extracted events as needed
  console.log(extractedEvents);