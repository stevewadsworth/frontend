import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import App from './Pages/Fragments/App.tsx'

import Gallery from './Pages/Gallery/Gallery.tsx';
import Exhibitions from './Pages/Exhibitions/Exhibitions.tsx';
import About from './Pages/About/About.tsx';

// Import Firebase to get it all setup
import './Utilities/firebase.ts'
import ShowError from './Pages/Error/ShowError.tsx';
import exhibitionsLoader from './Loaders/exhibitionsLoader.ts';
import Carousel from './Pages/Gallery/Carousel.tsx';
import galleryLoader from './Loaders/galleryLoader.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ShowError />,
    children: [
      { index: true, element: <Navigate to="/gallery" replace /> },
      {
        path: "gallery",
        loader: galleryLoader, // Use the shared loader
        element: <Gallery />,
        errorElement: <ShowError />
      },
      {
        path: "gallery/:id",
        element: <Carousel backLink='/gallery' />,
        loader: galleryLoader, // Use the shared loader
        errorElement: <ShowError />
      },
      {
        path: "exhibition",
        loader: exhibitionsLoader,
        element: <Exhibitions />,
        errorElement: <ShowError />
      },
      {
        path: "about",
        element: <About />
      }
    ]
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

} else {
  console.error("NO ROOT ELEMENT FOUND!")
}
