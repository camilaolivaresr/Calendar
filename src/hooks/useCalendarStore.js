import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store/calendarSlice";
import calendarApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../calendar/pages/convertEventsToDateEvents";

const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector(state => state.calendar);
    const { user } = useSelector(state => state.auth);


    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {
        //update event 

        if (calendarEvent._id) {
            dispatch(onUpdateEvent({ ...calendarEvent }))

        } else {
            const { data } = await calendarApi.post('/events', calendarEvent);
            // console.log({ data })

            dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }))
        }
    }

    const startDeletingEvent = () => {
        dispatch(onDeleteEvent())
    }

    const startLoadingEvents = async () => {
        try {
            const { data } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents(data.events);
            dispatch(onLoadEvents(events))
             console.log(events)
        

        } catch (error) {
            console.log('error cargando eventos');
            console.log(error)
        }
    }


    return {
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents

    }

}


export default useCalendarStore
