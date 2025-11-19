// src/routes/AppRouters.jsx

import { Routes, Route } from "react-router-dom";
import ListaProd from "../pages/ListaProdutos";
import FormProd from "../pages/CadastroProduto";
import DetalhesProd from "../pages/DetalhesProduto"; 

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ListaProd />} />
      <Route path="/novo" element={<FormProd />} />
      <Route path="/editar/:id" element={<FormProd />} />
      <Route path="/detalhes/:id" element={<DetalhesProd />} /> 
    </Routes>
  );
}