import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import App from './App'

import Gallery from './Pages/Gallery/Gallery';
import Exhibitions from './Pages/Exhibitions/Exhibitions';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

import ImageView from './Pages/ImageView/ImageView';
import {loader as ImageViewLoader} from './Pages/ImageView/ImageView';

// Import Firebase to get it all setup
import './Firebase.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>ERROR</p>,
    children: [
      { index: true, element: <Navigate to="/Gallery" replace /> },
      {
        index: true,
        path: "gallery",
        element: <Gallery />
      },
      {
        path: "exhibition",
        element: <Exhibitions />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
  ]
  },
  {
    path: "/image-view/:id",
    element: <ImageView />,
    loader: ImageViewLoader
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
