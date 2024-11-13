import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AboutPage.css';
import ajays from '../Assets/ajays.jpg'

const AboutPage = () => {
    return (
        <div className="about-page">
            <Navbar />
            <header className="about-header">
                <h1>About Us</h1>
                <p>Learn more about our journey and our mission to help businesses thrive online.</p>
            </header>
            <section className="about-content">
                <h2>Our Story</h2>
                <p>
                    We started as a small team of passionate digital marketers with a vision to transform businesses
                    through online channels. Over the years, we've grown into a full-fledged digital marketing agency,
                    helping countless clients achieve their online goals.
                </p>

                <h2>Our Mission</h2>
                <p>
                    Our mission is to empower businesses with the strategies and tools needed to succeed in the digital
                    landscape. We believe that with the right approach, any business can grow and reach new heights.
                    Led by our team head, Ajay, we are committed to providing innovative and effective digital marketing solutions
                    that drive real results.
                </p>

                <h2>About Us</h2>
                <p>
                    At the core of our agency is a commitment to excellence. We are a team of creative thinkers, data-driven
                    strategists, and dedicated professionals who are passionate about digital marketing. Whether it's improving
                    search engine rankings, crafting engaging content, or managing social media presence, we are here to help
                    your business succeed online.
                </p>

                <h2>Meet Our Team Head: Ajay K</h2>
                <div className="team-profile">
                    <div className="profile-card">
                        <img src={ajays} alt="Ajay" className="profile-pic" />
                        <div className="profile-details">
                            <h3>Ajay</h3>
                            <p>Team Head - Digital Marketing Expert</p>
                            <p>
                                Ajay is a seasoned digital marketing expert with over a decade of experience in the industry. 
                                His passion for innovation and his deep understanding of the digital landscape have been 
                                instrumental in the growth and success of our clients.
                            </p>
                            <p>
                                Under Ajay's leadership, our agency has expanded its service offerings and has been recognized 
                                for its excellence in digital marketing. His commitment to continuous learning and adaptation 
                                in the fast-paced world of digital marketing keeps our agency at the forefront of the industry.
                            </p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/ajay" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://twitter.com/ajay" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="mailto:ajay@example.com">
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutPage;
