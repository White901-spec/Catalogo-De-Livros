import React, { useEffect, useMemo, useRef, useState } from "react";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import booksData from "../data/books.json";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Catalogo() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useLocalStorage("catalogo.search", "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      setTimeout(() => {
        setBooks(booksData);
        setLoading(false);
      }, 400);
    } catch (err) {
      setError("Não foi possível carregar os livros.");
      setLoading(false);
    }
  }, []);

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return books;
    return books.filter(b =>
      (b.title || "").toLowerCase().includes(term) ||
      (b.author || "").toLowerCase().includes(term)
    );
  }, [books, searchTerm]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <div>
      <header className="catalog-header">
        <h2>Catálogo</h2>
        <div className="counters">
          <span>Total: <strong>{books.length}</strong></span>
          <span>Filtrados: <strong>{filtered.length}</strong></span>
        </div>
      </header>

      <div className="search-row">
        <input
          ref={inputRef}
          type="search"
          placeholder="Buscar por título ou autor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Buscar livros"
        />
        <button className="btn" onClick={() => setSearchTerm("")}>Limpar</button>
      </div>

      <section className="books-grid">
        {filtered.length === 0 ? (
          <p className="muted">Nenhum livro encontrado.</p>
        ) : (
          filtered.map(book => <BookCard key={book.id} book={book} />)
        )}
      </section>
    </div>
  );
}