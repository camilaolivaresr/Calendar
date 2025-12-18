
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../auth/pages/LoginPage';
import CalendarPage from '../calendar/pages/CalendarPage';

const AppRouter = () => {

    const authStatus = 'not_auth';
    return (
        <div>
            <Routes>
                {
                    (authStatus === 'not_auth')
                        ? <Route path='/auth/*' element={<LoginPage />} />
                        : <Route path='/*' element={<CalendarPage />} />
                }
                <Route path='/*' element={<Navigate to="/auth/login" />} />
            </Routes>
        </div>
    )
}

export default AppRouter
