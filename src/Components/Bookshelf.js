// Bookshelf component
import React from "react";
import {Link} from "react-router-dom"

function Bookshelf({ books, onRemoveFromBookshelf, onLogout }) {
  return (
    <div className="bookshelf ">
      <h2 class="well">My Bookshelf</h2>
      <div class="d-flex ">
        {books.map((book) => (
          <div key={book.id} class="p-2">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="img" />
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors.join(", ")}</p>
            <button onClick={() => onRemoveFromBookshelf(book)} class="btn btn-outline-info fs-3 animated pulse">
              Remove from Bookshelf
            </button>
          </div>
        ))}
      </div>
      <Link to ="/">
      <button onClick={onLogout}  class="btn btn-info float-right fs-3 btn-lg">Logout</button>
      </Link>
   
    </div>
  );
}

export default Bookshelf;