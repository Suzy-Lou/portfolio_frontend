import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import Home from './home/Home.jsx'
import Connexion from './connexion/Connexion.jsx'
import APropos from './aPropos/APropos.jsx'
import Project from './projects/Project.jsx'
import AdminPage from './adminPage/AdminPage.jsx'
import DetailedProject from './detailedProject/DetailedProject.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/app',
    element: <App/>,
  },
  {
    path: '/connexion',
    element:<Connexion/>,
  },
  {
    path: '/APropos',
    element:<APropos/>,
  },
  {
    path: '/projets',
    element:<Project/>,
  },
  {
    path: '/projets/:id',
    element:<DetailedProject/>,
  },
  {
    path: '/admin',
    element:<AdminPage/>,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
