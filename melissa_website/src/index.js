import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Gallery from './Pages/Gallery/Gallery';
import Exhibitions from './Pages/Exhibitions/Exhibitions';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

import NavBar from './Head/NavBar';
import Head from './Head/Head';
import Footer from './Footer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Head/> <NavBar/> <Outlet/> <Footer/></>,
    errorElement: <p>ERROR</p>,
    children: [
      {
        path: "gallery",
        element: <Gallery />
      },
      {
        path: "exhibition",
        element: <Exhibitions />
      },
      {
        path: "about",
        "element": <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
  ]
  },
  {
    path: "/test",
    element: <p>test</p>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='flex justify-center'>
      <div className='w-[50%] max-w-[50%]'>
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
