import React, { useEffect, useState } from "react";
import axios from "axios";

import"../App.css"

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
    <div className="">
    <h2>Search Results</h2>
    <div className="card-deck">
      <div>
      {books.map((book) => (
        <div key={book.id} class="card">
          
          <img src={book.volumeInfo.imageLinks.thumbnail}class="img" alt="img"  />
          <h5 class="card-title">{book.volumeInfo.title}</h5>
          <p class="card-text">{book.volumeInfo.authors}</p>
          <p class="card-text">{book.volumeInfo.description}</p>
          <button onClick={() => onAddToBookshelf(book)} class="text-muted">
            Add to Bookshelf
          </button>
        </div>
      ))}
      </div>
    </div>
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








