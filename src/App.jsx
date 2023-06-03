import React from 'react'
import {Button, useColorMode} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';

// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      {/* <Route path='selected' element={<Selected/>}/> */}
    </Route>
  )
);

const App = () => {

  const { colorMode, toggleColorMode } = useColorMode()


  return (
   
    <RouterProvider router={router} />
    
  )
}

export default App