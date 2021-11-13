import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-primary">
            <nav className="flex justify-between items-center container py-3">
                <div>
                    <Link to="/" className="nav-link text-3xl font-bold">Drone BD</Link>
                </div>
                <div>
                    <ul>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/explore" className="nav-link">Explore</Link>
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        <Link to="/" className="nav-link">Log Out</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/signup" className="nav-link">Signup</Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;