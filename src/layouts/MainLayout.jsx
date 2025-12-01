import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

export default function MainLayout() {
  return (
    <div className="app">
      <header className="header">
        <h1>Catálogo Digital de Livros Brasileiros - Simples</h1>
        <nav>
          <NavLink to="/" end className={({isActive}) => isActive ? "navlink active" : "navlink"}>Home</NavLink>
          <NavLink to="/catalogo" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Catálogo</NavLink>
        </nav>
        <ThemeToggle />
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        <small>Projeto De Trabalho — React Router v7 • Exemplo Didático</small>
      </footer>
    </div>
  );
}