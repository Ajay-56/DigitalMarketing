import React, { useState } from 'react';
import './NewsletterForm.css';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // Simulate API call
            setMessage('Thank you for subscribing!');
            setEmail('');
        } else {
            setMessage('Please enter a valid email address.');
        }
    };

    return (
        <div className="newsletter-form">
            <h3>Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default NewsletterForm;
