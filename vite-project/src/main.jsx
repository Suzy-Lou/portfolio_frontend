import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import Home from './home/Home.jsx'
import Connexion from './connexion/Connexion.jsx'
import APropos from './aPropos/APropos.jsx'
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
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
