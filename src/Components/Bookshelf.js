// Bookshelf component
import React from 'react';
function Bookshelf({ books, onRemoveFromBookshelf, onLogout }) {
return (
<div>
<h2>My Bookshelf</h2>
<ul>
{books.map(book => (
<li key={book.id}>
<h3>{book.volumeInfo.title}</h3>
<p>{book.volumeInfo.authors.join(', ')}</p>
<button onClick={() => onRemoveFromBookshelf(book)}>Remove from Bookshelf</button>
</li>
))}
</ul>
<button onClick={onLogout}>Logout</button>
</div>
);
}
export default Bookshelf;