import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./routes/Home/Home.tsx";
import Sobre from "./routes/Sobre/Sobre.tsx";
import Cursos from "./routes/Cursos/Cursos.tsx";
import Modulo from "./routes/Modulo/Modulo.tsx";
import Parceiros from "./routes/Parceiros/Parceiros.tsx";
import Transparencia from "./routes/Transparencia/Transparencia.tsx";
import Contato from "./routes/Contato/Contato.tsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/AVASUS/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/AVASUS/",
        element: <Home />,
      },
      {
        path: "/AVASUS/sobre",
        element: <Sobre />,
      },
      {
        path: "/AVASUS/cursos",
        element: <Cursos />,
      },
      {
        path: "/AVASUS/cursos/:id",
        element: <Modulo />,
      },
      {
        path: "/AVASUS/parceiros",
        element: <Parceiros />,
      },
      {
        path: "/AVASUS/transparencia",
        element: <Transparencia />,
      },
      {
        path: "/AVASUS/contato",
        element: <Contato />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
