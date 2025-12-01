import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <h3>{book.title}</h3>
      <p className="muted">{book.author} — {book.year}</p>
      <p>{book.description?.slice(0, 120)}{book.description && book.description.length > 120 ? "…" : ""}</p>
      <div className="card-actions">
        <Link to={`/catalogo/${book.id}`} className="btn">Ver detalhes</Link>
      </div>
    </article>
  );
}