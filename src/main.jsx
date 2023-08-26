import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./ui/Layout.jsx";

// routes

import Home from "./features/Home/Home.jsx";
import Movies from "./features/Movies/Movies.jsx";
import TvSeries from "./features/TvSeries/TvSeries.jsx";
import BookMarked from "./features/BookMarked/BookMarked.jsx";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-mainGreyishBlue p-6 h-screen w-screen grid grid-cols-5">
    <MainContext>
      <RouterProvider router={router} />
    </MainContext>
  </div>
);
