import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@/assets/main.scss'
import { Login } from '@/pages/auth/login'
import { Dashboard } from '@/pages/dashboard'
import { PrivateRoutes } from '@/routes/privateRoutes'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route element={<PrivateRoutes loggedIn={true} />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
