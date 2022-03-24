import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    return (
        <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <input type="text" placeholder="Search Movies" />
        </div>
    );
}

export default SearchBar;
