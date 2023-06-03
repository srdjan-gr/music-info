import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Chakra
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'


// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    // errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
