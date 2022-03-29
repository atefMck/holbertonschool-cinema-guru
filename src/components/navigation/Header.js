import React from 'react';
import SearchBar from '../general/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

const Header = ({ userUsername, setIsLoggedIn }) => {
    const logout = () => {
        localStorage.removeItem('accessToken')
        setIsLoggedIn(false)
    }
    return (
        <nav className="navigation-header">
            <h1>Cinema Guru</h1>
            <span>
                <img src="https://picsum.photos/100/100" alt="" />
                <p>Welcome, {userUsername}!</p>
                <span onClick={logout}>
                    <FontAwesomeIcon icon={faSignOut} />
                    <p>Logout</p>
                </span>

            </span>
        </nav>
    );
}

export default Header;
