import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import Home from './home/Home.jsx'
import Connexion from './connexion/Connexion.jsx'
import APropos from './aPropos/APropos.jsx'
import Project from './projects/Project.jsx'
import AddProject from './addProject/AddProject.jsx'
import AdminProjects from './adminProjects/AdminProjects.jsx'
import DetailedProject from './detailedProject/DetailedProject.jsx'
import DetailedProjectAdmin from './adminProjectDetailed/AdminProjectDetailed.jsx'
import EditProject from './editProject/EditProject.jsx'

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
    path: '/projects/add',
    element:<AddProject/>,
  },
  {
    path: '/admin/projects',
    element:<AdminProjects/>,
  },
   {
     path: '/admin/projects/:id',
     element:<DetailedProjectAdmin/>,
   },
    {
      path: '/admin/projects/edit/:id',
      element:<EditProject/>,
    },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


