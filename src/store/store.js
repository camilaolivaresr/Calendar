import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./uiSlice";
import { calendarSlice } from "./calendarSlice";




export const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})