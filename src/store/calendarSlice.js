import { createSlice } from "@reduxjs/toolkit";
import { addHours } from 'date-fns';


const tempEvents = 
  {
    _id: new Date().getTime(),
  title: ' reunion',
  notes: ' Pagina de yoga',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Zineb'
  }
};

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events:[
            tempEvents
        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
    }
});

export const {onSetActiveEvent, } = calendarSlice.actions;
