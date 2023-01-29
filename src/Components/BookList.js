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
    <div className="card">
    <h2>Search Results</h2>
    <br></br>
    <div className="card-deck h-100">
      
      {books.map((book) => (
        <div key={book.id} class="card col-sm-4">
          
          <img src={book.volumeInfo.imageLinks.thumbnail}class="card-img-top img-thumbnail" alt="img"  />

          <div class="card-body">
            <h3 class="text-white bg-dark">TITLE</h3>
          <h5 class="card-title fs-3">{book.volumeInfo.title}</h5>
          <br></br>
          <h3 class="text-white bg-dark">AUTHOR</h3>
          <p class="card-text">{book.volumeInfo.authors}</p>
          <h3 class="text-white bg-dark" >DESCRIPTION</h3>
          <p class="card-text fs-4">{book.volumeInfo.description}</p>
          </div>
          <div class="card-footer">
          <button onClick={() => onAddToBookshelf(book)} class="btn btn-outline-dark fs-3 animated pulse">
            Add to Bookshelf
          </button>
          </div>
        </div>
      ))}
      
    </div>
    <div >
        {page > 1 && (
          <button onClick={() => onPagination("prev")} class="btn btn-info btnPrevious fs-1">Previous(10 books)</button>
        )}
        {totalItems > page * 10 && (
          <button onClick={() => onPagination("next")} class="btn btn-info btnPrevious fs-1">Next(10 books)</button>
        )}
      </div>
    </div>
  );
}

export default BookList;








