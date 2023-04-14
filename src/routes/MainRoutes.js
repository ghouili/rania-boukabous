import React from 'react'

import { Navbar } from '../components';
import { Dashboard, About, Contact, Login } from '../containers';
import { Route, Routes, useLocation } from 'react-router-dom';

const MainRoutes = () => {
  const location = useLocation();
  // if(location) {fn1} else {fn2}
  // {location ? fn1 : fn2}
  return (
    <div className='w-screen h-screen'>
      {location.pathname === '/login' || location.pathname === '/register' ? null :
        <Navbar />
      }

      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='login' element={<Login />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about'  element={<About />} />
      </Routes>
    </div>
  )
}

export default MainRoutes