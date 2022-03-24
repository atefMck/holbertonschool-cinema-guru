import React from 'react';
import SearchBar from '../general/SearchBar'

const Header = () => {
    return (
        <nav className="navigation-header">
            <h1>Cinema Guru</h1>
            <SearchBar />
            <span>
                <img src="https://picsum.photos/100/100" alt="" />
                <p>Welcome, Attouf!</p>
            </span>
        </nav>
    );
}

export default Header;
