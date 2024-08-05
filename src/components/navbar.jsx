// src/components/Navbar.js
import React from 'react';
import './navbar.css'; // Ensure this path is correct

export const Nav = () => {
    return (
        <header className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><a href="#home">Accueil</a></li>
                <li className="nav-item"><a href="#about">À propos</a></li>
                {/* Add more links as needed */}
            </ul>
        </header>
    );
};

export default Nav;
