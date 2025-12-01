import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function enterCatalog() {
    
    navigate("/catalogo");
  }

  return (
    <div className="home">
      <h2>Bem-vindo ao Catálogo</h2>
      <p>Explore uma coleção de livros Brasileiros. Use o botão abaixo para entrar no catálogo.</p>

      <button onClick={enterCatalog} className="btn primary">
        Entrar no Catálogo
      </button>

      <section style={{marginTop:20}}>
        <h3>Sobre</h3>
        <p>Projeto demonstrando rotas do React Router, navegação declarativa e programática, rotas dinâmicas e mais.</p>
      </section>
    </div>
  );
}