import React, { useState } from 'react';
import Login from './Login'
import Register from './Register'
import "./auth.css"

const Authentication = () => {
    const [Switch, setSwitch] = useState(true);
    return (
        <form className="authentication">
            <header>
                <ul>
                    <li onClick={() => setSwitch(true)} className={Switch ? 'active' : ''}>Sign In</li>
                    <li onClick={() => setSwitch(false)} className={!Switch ? 'active' : ''}>Sign Up</li>
                </ul>
            </header>
            <main>
                {Switch ? <Login /> : <Register />}
            </main>
        </form>
    );
}

export default Authentication;
