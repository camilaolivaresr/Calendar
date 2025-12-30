
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../auth/pages/LoginPage';
import CalendarPage from '../calendar/pages/CalendarPage';
import useAuthStore from '../hooks/useAuthStore';
import { useEffect } from 'react';

const AppRouter = () => {

    const {checkAuthToken, status} = useAuthStore();

    useEffect(() =>{
        checkAuthToken();
    }, []);

    if (status === 'checking') {
        return (
            <h3>Cargando ...</h3>
        )
    }


    return (
        <div>
            <Routes>
                {
                    (status === 'not_auth')
                        ? <Route path='/auth/*' element={<LoginPage />} />
                        : <Route path='/*' element={<CalendarPage />} />
                }
                <Route path='/*' element={<Navigate to="/auth/login" />} />
            </Routes>
        </div>
    )
}

export default AppRouter
