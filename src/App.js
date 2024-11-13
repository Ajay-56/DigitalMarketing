import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
    return (
        <Router>
            <div className="App">
            
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/sign" element={<Signup/>} />
                        
                    </Routes>
                </div>  
            </div>
        </Router>
    );
}

export default App;
