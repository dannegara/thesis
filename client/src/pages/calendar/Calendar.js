import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const events = [
  {
    title: 'title',
    start: new Date(),
    end: new Date(),
    name: 'Name'
  }
]

const MyCalendar = () => {
  return (
    <div style={{ padding: 16 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="name"
        style={{ height: 500 }}
      />
    </div>
  )
}

export default MyCalendar;