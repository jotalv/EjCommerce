import React from "react";
import Home from "./Loja";
import Suporte from "./Suporte";
import QuemSomos from "./QuemSomos";
import PoliticaDePrivacidade from "./PoliticaDePrivacidade";
import Carrinho from "./Carrinho";
import Ej from "./EJ";
import Login from "./Login"

import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
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