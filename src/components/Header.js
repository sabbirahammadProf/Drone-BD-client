import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const Header = () => {

    const { user, logOut } = useAuth();

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
                        {
                            user ? <><Link to="/dashboard" className="nav-link">Dashboard</Link>
                                <button onClick={logOut} className="nav-link">Log Out</button></> : <><Link to="/login" className="nav-link">Login</Link>
                                <Link to="/signup" className="nav-link">Signup</Link></>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;