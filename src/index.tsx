import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import App from './App.tsx'

import Gallery from './Pages/Gallery/Gallery.tsx';
import Exhibitions from './Pages/Exhibitions/Exhibitions.tsx';
import About from './Pages/About/About.tsx';

import ImageView from './Pages/Gallery/ImageView.tsx';

// Import Firebase to get it all setup
import './firebase.ts'
import Error from './Pages/Error/Error.tsx';
import GalleryModel from './Models/GalleryModel.ts';
import eventsLoader from './Loaders/eventsLoader.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Navigate to="/gallery" replace /> },
      {
        index: true,
        path: "gallery",
        loader: async () => { return GalleryModel() },
        element: <Gallery />,
        errorElement: <Error />
      },
      {
        path: "exhibition",
        loader: eventsLoader,
        element: <Exhibitions />,
        errorElement: <Error />
      },
      {
        path: "about",
        element: <About />
      }
  ]
  },
  {
    path: "/image-view/:id",
    element: <ImageView />,
    loader: async () => { return GalleryModel() },
  }
])

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
} else {
  console.error("NO ROOT ELEMENT FOUND!")
}
