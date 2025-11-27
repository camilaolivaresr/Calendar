import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {  format, parse, startOfWeek, getDay } from 'date-fns'
import esES from 'date-fns/locale/es'

import Navbar from '../../auth/components/Navbar'
import { getMessagesES } from './getMessages'
import CalendarEvent from '../componenets/CalendarEvent'
import { useState } from 'react'
import CalendarModal from '../componenets/CalendarModal'
import { useUiStore } from '../../hooks/useUiStore'
import useCalendarStore from '../../hooks/useCalendarStore'
import FabAddNew from '../componenets/FabAddNew'
import FabDelete from '../componenets/FabDelete'

const locales = {
  'es': esES,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})


const CalendarPage = () => {

  const {openDateModal} = useUiStore();
  const {events, setActiveEvent} = useCalendarStore();

 const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')



  const evetStyleGetter = (event, start, end, isSelected) => {
    console.log({ event, start, end, isSelected })

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    return {
      style
    }

  }
  const onDoubleClick = (event) => {
    // console.log({doubleClick: event})
    openDateModal();
  }

  const onSelect = (event) => {
    // console.log({click: event})
    setActiveEvent(event);
  }

  const onViewChanged = (event) => {
    console.log({viewChanged: event});
    localStorage.setItem('lastView', event);
    setLastView(event)

  }



  return (
    <div>
      <Navbar />
      <div className='container'>
        <Calendar
          culture='es'
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: ('calc(100vh - 80px)') }}
          messages={getMessagesES()}
          eventPropGetter={evetStyleGetter}
          components={{
            event: CalendarEvent
          }}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelect}
          onView={onViewChanged}
          defaultView={lastView}
        />
        <CalendarModal/>
        <FabAddNew/>
        <FabDelete/>
      </div>
    </div>
  )
}

export default CalendarPage
