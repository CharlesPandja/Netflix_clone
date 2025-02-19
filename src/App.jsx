import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element : <HomePage />},
    { path: '/login', element : <Login />}
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
