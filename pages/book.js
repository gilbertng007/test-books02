

import React, { useEffect, useState } from 'react';
import { fetchBookById } from './lib/api';

export default function BookDetail() {
  const [book, setBook] = useState(null);
  const bookId = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('id') : null;

  useEffect(() => {
    if (bookId) {
      fetchBookById(bookId).then(setBook);
    }
  }, [bookId]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{book.title}</h1>
      < img src={book.cover_image} alt={book.title} />
      <p>作者: {book.author}</p >
      <p>描述: {book.description}</p >
      <p>出版年份: {book.publication_year}</p >
    </div>
  );
}
