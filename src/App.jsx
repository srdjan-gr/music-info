import React from 'react'
import { useColorMode } from '@chakra-ui/react'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';


// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      {/* <Route path='selected' element={<Selected/>}/> */}
      <Route path='error' element={<ErrorPage/>} />
    </Route>
  )
);

const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App