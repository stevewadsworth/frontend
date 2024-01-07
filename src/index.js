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
import ComingSoon from './Pages/ComingSoon/ComingSoon.js';

import ImageView from './Pages/ImageView/ImageView.tsx';

// Import Firebase to get it all setup
import './firebase.ts'
import Error from './Pages/Error/Error.tsx';
import GalleryModel from './Models/GalleryModel.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComingSoon />
  },
  {
    path: "/real",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Navigate to="/real/gallery" replace /> },
      {
        index: true,
        path: "gallery",
        loader: async () => { return GalleryModel() },
        element: <Gallery />,
        errorElement: <Error />
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
    loader: async () => { return GalleryModel() },
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
