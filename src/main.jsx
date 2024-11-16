import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrinho from "./Carrinho";
import Login from "./Login";
import QuemSomos from "./QuemSomos";
import Ej from "./EJ";
import Suporte from "./Suporte";
import PoliticaDePrivacidade from "./PoliticaDePrivacidade";
import CepPage from "../meu-projeto/src/pages/CepPage"
import Footer from "./Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/quemsomos",
    element: <QuemSomos />,
  },

  {
    path: "/politicadeprivacidade",
    element: <PoliticaDePrivacidade />,
  },

  {
    path: "/suporte",
    element: <Suporte />,
  },

  {
      path: "/carrinho",
      element: <Carrinho />,
  },

  {
    path: "/home",
    element: <Ej />,
  },

  {
    path: "/loja",
    element: <Home />
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);