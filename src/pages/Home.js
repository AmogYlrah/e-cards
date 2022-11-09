import React from 'react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>HOME</h1>
            <Footer />
        </div>
    );
};

export default Home;