

export default function Ac() {

  return (
    <div>

    </div>
  )

}


export const fetchBooks = async () => {
  // const response = await fetch('https://freetestapi.com/api/v1/books');
  // const response = await fetch('https://my-json-server.typicode.com/gilbertng007/bookstore-02/books');
  const response = await fetch('http://localhost:3000/api/books');
  // const response = await fetch('http://localhost:4000/bookstore');
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};



export const fetchBookById = async id => {
  // const response = await fetch(`https://freetestapi.com/api/v1/books/${id}`);
  // const response = await fetch(`https://my-json-server.typicode.com/gilbertng007/bookstore-02/books`);
  const response = await fetch(`http://localhost:3000/api/books/${id}`);
  // const response = await fetch(`http://localhost:4000/bookstore/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};



