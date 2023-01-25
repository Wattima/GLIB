import React, { useEffect, useState } from "react";
import axios from "axios";
function BookList({
  searchQuery,
  onAddToBookshelf,
  API_KEY,
  page,
  onPagination,
}) {
  const [books, setBooks] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  // Fetch books from Google Books API
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${API_KEY}&startIndex=${
          (page - 1) * 10
        }&maxResults=10`
      )
      .then((res) => {
        setBooks(res.data.items);
        setTotalItems(res.data.totalItems);
      })
      .catch((err) => console.log(err));
  }, [searchQuery, API_KEY, page]);
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="img" />
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.description}</p>
            <button onClick={() => onAddToBookshelf(book)}>
              Add to Bookshelf
            </button>
          </li>
        ))}
      </ul>
      <div>
        {page > 1 && (
          <button onClick={() => onPagination("prev")}>Previous</button>
        )}
        {totalItems > page * 10 && (
          <button onClick={() => onPagination("next")}>Next</button>
        )}
      </div>
    </div>
  );
}
export default BookList;







