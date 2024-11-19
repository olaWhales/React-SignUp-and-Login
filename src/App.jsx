import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {createBrowserRouter, RouterProvider } from "react-router-dom"  // i destructure here
import routes from './routes/routes.jsx'
// import "./App.css"

const router = createBrowserRouter([...routes]);

function App() {

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
