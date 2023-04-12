import React from 'react'

import { Navbar } from '../components';
import { Dashboard, About, Contact } from '../containers';
import { Route, Routes } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about'  element={<About />} />
      </Routes>
    </div>
  )
}

export default MainRoutes