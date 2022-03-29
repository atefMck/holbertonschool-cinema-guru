import React, { useState } from 'react';
import Login from './Login'
import Register from './Register'
import "./auth.css"
import axios from 'axios';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [_switch, setSwitch] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSwitch = (value) => {
        setSwitch(value)
        setPassword("")
        setUsername("")
    }
    const handleForm = (e) => {
        e.preventDefault()
        if (_switch) {
            axios.post('http://localhost:8000/api/auth/login', {
                username,
                password
            }).then(res => {
                if (res.data.accessToken) {
                    localStorage.setItem("accessToken", res.data.accessToken)
                    setUserUsername(username)
                    setIsLoggedIn(true)
                }
            })
        } else {
            axios.post('http://localhost:8000/api/auth/register', {
                username,
                password,
            }).then(res => {
                if (res.data.accessToken) {
                    localStorage.setItem("accessToken", res.data.accessToken)
                    setUserUsername(username)
                    setIsLoggedIn(true)
                }
            })
        }
    }
    return (
        <form className="authentication" onSubmit={handleForm}>
            <header>
                <ul>
                    <li onClick={() => handleSwitch(true)} className={_switch ? 'active' : ''}>Sign In</li>
                    <li onClick={() => handleSwitch(false)} className={!_switch ? 'active' : ''}>Sign Up</li>
                </ul>
            </header>
            <main>
                {_switch ? <Login
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword} /> :
                    <Register
                        password={password}
                        setPassword={setPassword}
                        username={username}
                        setUsername={setUsername} />}
            </main>
        </form>
    );
}

export default Authentication;
