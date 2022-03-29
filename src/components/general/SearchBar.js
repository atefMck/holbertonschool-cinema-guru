import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ title, setTitle }) => {
    const onChange = (e) => setTitle(e.target.value)
    return (
        <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <input type="text" placeholder="Search Movies" value={title} onChange={onChange} />
        </div>
    );
}

export default SearchBar;
