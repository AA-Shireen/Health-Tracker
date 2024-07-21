import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App'
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard';
import HealthTrack from './components/trackHealth/HealthTrack';
import Registration from './components/registration/Registration';
import Login from './components/login/Login'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
            <Route path='' element={<Home />} />
            <Route path='dashBoard' element={<Dashboard />} />
            <Route path='healthTrack' element={<HealthTrack />} />
            <Route path='registration' element={<Registration />} />
            <Route path='login' element={<Login />} />
        </Route>
    )
);

export default router;