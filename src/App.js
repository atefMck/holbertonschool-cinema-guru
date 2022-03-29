import React, { useState, useEffect } from 'react';
import "./App.css"
import Authentication from "./routes/auth/Authentication"
import Dashboard from "./routes/dashboard/Dashboard"
import axios from "axios"

function App() {
    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    const [userUsername, setUserUsername] = useState("");
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken")
        axios.post('http://localhost:8000/api/auth/', {}, {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        }).then(res => {
            setUserUsername(res.data.username)
            setIsLoggedIn(true)
        })
    }, []);
    return (
        <div className="App">
            {IsLoggedIn ? <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} /> : (
                <Authentication IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
            )}
        </div>
    );
}

export default App;
