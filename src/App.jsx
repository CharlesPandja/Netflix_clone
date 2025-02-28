import React, {lazy, Suspense} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Login from './pages/Login';
// import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Browse from './pages/Browse.jsx';
import BrowseHome, { loader as browseHomeLoader } from './pages/BrowseHome';
import Series from './pages/Series';
import Movies from './pages/Movies';
import { ShowInterfaceContextProvider } from './hooks/ShowInterfaceContext.jsx';
import { action as logoutAction } from './pages/Logout.jsx';
import { checkAuth } from './util/auth.js';

const App = () => {

  const HomePage = lazy(() => import('./pages/HomePage'));
  const Login = lazy(() => import('./pages/Login'));

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ShowInterfaceContextProvider><Root /></ShowInterfaceContextProvider>,
      errorElement: <NotFound />,
      children: [
        { path: '/', element: <Suspense fallback={<p>Loading...</p>}><HomePage /></Suspense> },
        { path: '/login', element: <Suspense fallback={<p>Loading...</p>}><Login /></Suspense> },
        {
          path: '/browse', element: <Browse />,
          loader : checkAuth,
          children: [
            { index: true, element: <BrowseHome />, loader: browseHomeLoader },
            { path: 'genre/series', element: <Series /> },
            { path: 'genre/movies', element: <Movies />},
            { path: 'logout', action: logoutAction },
            ,
          ]
        },
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
