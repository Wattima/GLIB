// Bookshelf component
import React from "react";
import {Link} from "react-router-dom"

function Bookshelf({ books, onRemoveFromBookshelf, onLogout }) {
  return (
    <div className="bookshelf">
      <h2 class="well">My Bookshelf</h2>
      <ul class="d-flex flex-row">
        {books.map((book) => (
          <li key={book.id} class="p-2">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="img" />
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors.join(", ")}</p>
            <button onClick={() => onRemoveFromBookshelf(book)}>
              Remove from Bookshelf
            </button>
          </li>
        ))}
      </ul>
      <Link to ="/">
      <button onClick={onLogout}>Logout</button>
      </Link>
   
    </div>
  );
}

export default Bookshelf;