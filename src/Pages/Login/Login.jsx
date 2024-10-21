// Login.jsx

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const { isAuthenticated, login, error } = useAuth();
    const [username, setUsername] = useState('mor_2314');
    const [password, setPassword] = useState('83r5^_');

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
    };

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        </div>
    );
};

export default Login;
