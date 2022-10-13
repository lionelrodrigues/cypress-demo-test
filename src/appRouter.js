import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Todo from "./pages/Todo";

import React from 'react'

const AppRouter = () => {
  let router = createBrowserRouter([{
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Todo />
  }
  ])

  return <RouterProvider router={router} />
}

export default AppRouter



