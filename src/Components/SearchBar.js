// SearchBar component
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
const [searchQuery, setSearchQuery] = useState('');

// Function to handle search button click
const handleSearch = () => {
onSearch(searchQuery);
}

return (
<div  className="d-flex justify-content-center align-items-center ">
    <form className="form-inline">
        <div className="search-box">
<input type="text" 
className="form-control form-control-lg text-center search-input fs-3"
placeholder="Search for books" 
onChange={e => setSearchQuery(e.target.value)} />
<button onClick={handleSearch} type="button" class="btn btn-info search-btn fs-3"><i className="fa fa-search"></i>Search</button>

</div>
</form>
</div>

);
}

export default SearchBar;