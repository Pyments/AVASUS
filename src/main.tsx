import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./routes/Home.tsx";
import Sobre from "./routes/Sobre.tsx";
import Cursos from "./routes/Cursos.tsx";
import Parceiros from "./routes/Parceiros.tsx";
import Transparencia from "./routes/Transparencia.tsx";
import Contato from "./routes/Contato.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/cursos",
        element: <Cursos />,
      },
      {
        path: "/parceiros",
        element: <Parceiros />,
      },
      {
        path: "/transparencia",
        element: <Transparencia />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
