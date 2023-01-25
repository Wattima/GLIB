// SearchBar component
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
const [searchQuery, setSearchQuery] = useState('');

// Function to handle search button click
const handleSearch = () => {
onSearch(searchQuery);
}

return (
<div>
<input type="text" placeholder="Search by name, author, or year of publication" onChange={e => setSearchQuery(e.target.value)} />
<button onClick={handleSearch}>Search</button>
</div>
);
}

export default SearchBar;