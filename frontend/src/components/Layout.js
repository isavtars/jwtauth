import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar/Navbar';
import Fotter from './fotter/Fotter';

const Layout = () => {
  return (
    <div>
      <Navbar/>
     <Outlet />
     <Fotter/>
    </div>
  )
}

export default Layout