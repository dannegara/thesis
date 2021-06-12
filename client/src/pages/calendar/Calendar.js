import React, { useEffect, useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tests')
    .then(res => res.json())
    .then(setEvents)
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="dateStart"
        endAccessor="dateFinish"
        titleAccessor="name"
        style={{ height: 500 }}
      />
    </div>
  )
}

export default MyCalendar;