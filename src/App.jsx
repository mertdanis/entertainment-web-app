import React from "react";

import Movies from "./features/Movies/Movies.jsx";
import TvSeries from "./features/TvSeries/TvSeries.jsx";
import BookMarked from "./features/BookMarked/BookMarked.jsx";
import Layout from "./ui/Layout";
import Home from "./features/Home/Home";
import { MainContext } from "./store/MainContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/movies",
        element: <Movies />,
      },

      {
        path: "/tvseries",
        element: <TvSeries />,
      },
      {
        path: "/bookmarked",
        element: <BookMarked />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <MainContext>
        <RouterProvider router={router} />
      </MainContext>
    </>
  );
}

export default App;
