import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuNutflix from '../components/MenuNutflix.jsx';

const Browse = () => {
  return (
    <div className="overflow-hidden">
      <MenuNutflix />
      <Outlet />
    </div>
  )
}

export default Browse
