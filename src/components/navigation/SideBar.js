import React, { useState, useEffect } from 'react';
import './navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faStar, faChartLine, faCalendar, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import Activity from '../Activity'
import axios from "axios"

const SideBar = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState('home');
    const [activities, setActivities] = useState([]);
    const [small, setSmall] = useState(true);
    const [showActivities, setShowActivities] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        axios.get(`http://localhost:8000/api/activity`, {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        }).then(res => setActivities(res.data))
    }, []);

    return (
        <nav className={`side-bar ${small ? "small" : ""}`} onMouseEnter={() => { setSmall(false); setTimeout(() => setShowActivities(true), 500) }} onMouseLeave={() => { setSmall(true); setShowActivities(false) }}>
            <ul className="navigation">
                <li className={selected === 'home' ? 'active' : ''} onClick={() => {
                    setSelected('home')
                    navigate('/')
                }}><FontAwesomeIcon icon={faFolder} className="icon" />{!small && "Home"} {showActivities && !small && selected === 'home' && <FontAwesomeIcon icon={faArrowRight} className="active-icon" />}</li>
                <li className={selected === 'favorites' ? 'active' : ''} onClick={() => {
                    setSelected('favorites')
                    navigate('/favorites')
                }}><FontAwesomeIcon icon={faStar} className="icon" />{!small && "Favorites"} {showActivities && !small && selected === 'favorites' && <FontAwesomeIcon icon={faArrowRight} className="active-icon" />}</li>
                <li className={selected === 'watchLater' ? 'active' : ''} onClick={() => {
                    setSelected('watchLater')
                    navigate('/watchlater')
                }}><FontAwesomeIcon icon={faClock} className="icon" />{!small && "Watch Later"} {showActivities && !small && selected === 'watchLater' && <FontAwesomeIcon icon={faArrowRight} className="active-icon" />}</li>
            </ul>
            {!small && (
                <ul className="activities">
                    <h1>Latest Activities</h1>
                    {activities.slice(0, 13).map(activity => <Activity key={activity.id} activity={activity} />)}
                </ul>)}
        </nav >
    );
}

export default SideBar;
