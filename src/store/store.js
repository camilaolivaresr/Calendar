import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./uiSlice";
import { calendarSlice } from "./calendarSlice";
import { authSlice } from "./authSlice";




export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        calendar: calendarSlice.reducer,
        ui:       uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})