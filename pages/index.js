import React, { useEffect, useState } from 'react';
import { fetchBooks } from './lib/api';
import BookCard from './components/BookCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionExpandIcon from './components/Accordion';
import Layout from './components/Layout'; // 导入布局组件



export default function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
    };
    fetchData();
  }, []);

  return (
    <Layout> {/* 使用布局组件 */}
      <AccordionExpandIcon />

      <h1 className="text-center">書籍列表</h1>
      <div className="row">
        {books.map(book => (
          <div key={book.id} className="col-md-4 mb-3">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
