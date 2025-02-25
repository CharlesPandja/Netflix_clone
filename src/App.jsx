import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Root from './pages/Root';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/login', element: <Login /> }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
