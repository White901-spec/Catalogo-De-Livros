import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import booksData from "../data/books.json";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export default function LivroDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const found = booksData.find(b => String(b.id) === String(id));
      setBook(found || null);
      setLoading(false);
    }, 250);
  }, [id]);

  if (loading) return <Loading />;

  if (!book) {
    return <ErrorMessage>Livro não encontrado. <Link to="/catalogo">Voltar ao catálogo</Link></ErrorMessage>;
  }

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p className="muted">{book.author} — {book.year}</p>
      <p>{book.description}</p>

      <div style={{marginTop:20}}>
        <button className="btn" onClick={() => navigate(-1)}>Voltar</button>
        <Link to="/catalogo" className="btn" style={{marginLeft:10}}>Voltar ao catálogo</Link>
      </div>
    </div>
  );
}