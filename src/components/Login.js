import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Prepare user data
        const userData = {
            email: email,
            password: password,
        };

        try {
            // Check if the email already exists on the server (GET request)
            const response = await axios.get(`http://localhost:3000/ajay?email=${email}`);
            
            if (response.data.length === 0) {
                // If no user found with the email, add the user to the JSON server (POST request)
                await axios.post('http://localhost:3000/ajay', userData);
                console.log('User registered successfully:', userData);
            } else {
                // If user exists, update the password (PUT request)
                const userId = response.data[0].id;
                await axios.put(`http://localhost:3000/ajay/${userId}`, userData);
                console.log('User login successful, updated details:', userData);
            }

            // Navigate to home page after successful login
            navigate("/");

        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="signup-link">
                    <p>Don't have an account? <Link to="/sign">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
