import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PopulerMovie from './containers/PopulerMovie';
import MoviePage from './containers/MoviePage';
import MovieUpdatePage from './containers/MovieUpdatePage';
import MovieCreatePage from './containers/MovieCreatePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "populer-movie",
    element: <PopulerMovie />,
  },
  {
    path: "movie-page/:id",
    element: <MoviePage />,
  },
  {
    path: "movie-update-page/:id",
    element: <MovieUpdatePage />,
  },
  {
    path: "movie-create-page",
    element: <MovieCreatePage />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
  />
);

