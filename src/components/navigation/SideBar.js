import React from 'react';
import './navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faStar, faChartLine, faCalendar, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {

    return (
        <nav className="side-bar">
            <ul>
                <li className="active"><FontAwesomeIcon icon={faFolder} className="icon" />My Collection <FontAwesomeIcon icon={faArrowRight} className="active-icon" /></li>
                <li><FontAwesomeIcon icon={faStar} className="icon" />Favorites</li>
                <li><FontAwesomeIcon icon={faChartLine} className="icon" />Trending</li>
                <li><FontAwesomeIcon icon={faCalendar} className="icon" />Coming Soon</li>
                <li><FontAwesomeIcon icon={faClock} className="icon" />Watch Later</li>
            </ul>
        </nav>
    );
}

export default SideBar;
