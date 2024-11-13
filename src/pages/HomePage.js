import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import axios from 'axios';
import { Divider, Paper } from '@mui/material';

const HomePage = () => {
    const navi = useNavigate();
    const [showAuthButtons, setShowAuthButtons] = useState(false);
    const [services, setServices] = useState([]);

    const handleHomeButtonClick = () => {
        setShowAuthButtons(!showAuthButtons);
    };

    const change = () => {
        navi("/login");
    };

    // Fetch services data from API
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:3000/item');
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, [services]);

    return (
        <div className="home-page">
            <Navbar onHomeClick={handleHomeButtonClick} />
            <header className="hero-section">
                {showAuthButtons && (
                    <div className="cta-buttons">
                    </div>
                )}
                <div className="hero-content">
                    <h1>Welcome to Our Digital Marketing Platform</h1>
                    <p>Helping you grow your business online</p>
                    <CTAButton text="Get Started" onClick={change} />
                </div>
            </header>
            <section className="features-section">
                <h2>Our Services</h2>
                <div className="features">
                    {services.map((service, index) => (
                        <Paper className="feature" sx={{backgroundColor:"whitesmoke",p:2}} key={index}>
                            <h3>{service.title}</h3>
                            <Divider/>
                            <p>{service.description}</p>
                        </Paper>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default HomePage;
