import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@/assets/sass/main.scss'

import { Login } from '@/pages/auth/login'
import { Dashboard } from '@/pages/dashboard'
import { PrivateRoutes } from '@/routes/privateRoutes'
import { useSelector } from 'react-redux'
import { AddPanic } from './pages/dashboard/addPanic'

const App = () => {
    const { loggedIn } = useSelector(state => state.auth)

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route element={<PrivateRoutes loggedIn={loggedIn} />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/add-panic" element={<AddPanic />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
