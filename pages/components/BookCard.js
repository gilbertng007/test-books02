import React from 'react';
import Image from 'next/image';

export default function BookCard({ book }) {
  const handleViewDetails = () => {
    window.location.href = `/book?id=${book.id}`;
  };

  return (
    <div className="card h-100">
      <Image src={book.cover_image} className="card-img-top" alt={book.title} 
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.author}</p >
        <button onClick={handleViewDetails} className="btn btn-primary">
          查看詳情
        </button>
      </div>
    </div>
  );
}
