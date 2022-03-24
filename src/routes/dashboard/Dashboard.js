import React from 'react';
import SideBar from '../../components/navigation/SideBar'
import Header from '../../components/navigation/Header'
import HomePage from './HomePage'
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Header />
            <div>
                <SideBar />
                <HomePage />
            </div>
        </div>
    );
}

export default Dashboard;
