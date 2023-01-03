import { Home, Booking } from '../pages'
import { Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Booking" element={<Booking />}></Route>
    </Routes>
  )
}

export default Router