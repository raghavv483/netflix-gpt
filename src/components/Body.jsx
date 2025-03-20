import React from 'react'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Header from './Header'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
        
    </div>
  )
}
export default Body  