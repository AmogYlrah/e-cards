import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} end><li>Home</li></NavLink>
                <NavLink to="/cart" className={(nav) => (nav.isActive ? "nav-active" : "")} end><li>Panier</li></NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")} end><li>About</li></NavLink>
                <NavLink to="/log" className={(nav) => (nav.isActive ? "nav-active" : "")} end><li>Login</li></NavLink>
            </ul>
        </div>
    );
};

export default Navigation;