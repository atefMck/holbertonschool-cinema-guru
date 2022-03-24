import React, { useState } from 'react';
import "./App.css"
import Authentication from "./routes/auth/Authentication"
import Dashboard from "./routes/dashboard/Dashboard"

function App() {
    const [IsLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <div className="App">
            {IsLoggedIn ? <Dashboard /> : (
                <Authentication />
            )}
        </div>
    );
}

export default App;
