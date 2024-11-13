import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../Forms/ContactForm';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <Navbar />
            <header className="contact-header">
                <h1>Contact Us</h1>
                <p>We would love to hear from you! Get in touch with us for any inquiries or support.</p>
            </header>
            <section className="contact-content">
                <h2>Send Us a Message</h2>
                <ContactForm />
            </section>
            <Footer />
        </div>
    );
};

export default ContactPage;
