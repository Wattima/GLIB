// Main App component
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar.js';
import BookList from './Components/BookList';
import LoginForm from './Components/LoginForm';
import Bookshelf from './Components/Bookshelf';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
const [bookshelf, setBookshelf] = useState([]);
const [page, setPage] = useState(1);
const API_KEY = 'AIzaSyCJUsdBro-zPloXWnu06fnJTLPl-_Gez-c';

// Function to handle login
const handleLogin = (username, password) => {
// Authenticate user here
setIsLoggedIn(true);
}

// Function to handle logout
const handleLogout = () => {
setIsLoggedIn(false);
}

// Function to handle adding a book to bookshelf
const handleAddToBookshelf = (book) => {
setBookshelf([...bookshelf, book]);
}

// Function to handle removing a book from bookshelf
const handleRemoveFromBookshelf = (book) => {
setBookshelf(bookshelf.filter(b => b.id !== book.id));
}

// Function to handle pagination
const handlePagination = (direction) => {
if (direction === 'next') {
setPage(page + 1);
} else {
setPage(page - 1);
}
}

return (
<div>
<h1>Welcome to the Book Search App</h1>

{isLoggedIn ? (
<div>
<Bookshelf 
         books={bookshelf} 
         onRemoveFromBookshelf={handleRemoveFromBookshelf} 
         onLogout={handleLogout} 
       />
<BookList 
         searchQuery={searchQuery} 
         onAddToBookshelf={handleAddToBookshelf} 
         API_KEY={API_KEY} 
         page={page} 
         onPagination={handlePagination} 
       />
       
</div>

) : (
<LoginForm onLogin={handleLogin} />

)}
<SearchBar onSearch={setSearchQuery} />
</div>
);
}

export default App;