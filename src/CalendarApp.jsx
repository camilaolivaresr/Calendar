import React from 'react'
import AppRouter from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'


const CalendarApp = () => {
  return (
    <div>
      <Provider store={ store }>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default CalendarApp
