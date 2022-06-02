import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Home from './pages/dashboard/Home'
import DashboardSharedLayout from './pages/dashboard/SharedLayout'
import Test from './pages/dashboard/Test'
import Login from './pages/Login'
import Register from './pages/Register'
import SharedLayout from './pages/SharedLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/dashboard' element={<DashboardSharedLayout />}>
          <Route index element={<Home />} />
          <Route path='test' element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
