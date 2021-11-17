import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const { logOut } = useAuth();
    return (
        <div className="container grid grid-cols-3">
            <div className="bg-secondary rounded text-center my-4">
                <h3 className="text-2xl py-4 text-white bg-black rounded mb-2">Dashboard of Sabbir Ahammad</h3>
                <div className="pb-4">
                    <Link to="/" className="dashboard-link">Manage all Orders</Link>
                    <Link to="/" className="dashboard-link">Manage products</Link>
                    <Link to="/" className="dashboard-link">Add new products</Link>
                    <Link to="/" className="dashboard-link">Pay Now</Link>
                    <Link to="/" className="dashboard-link">Make an admin</Link>
                    <Link to="/" className="dashboard-link">My orders</Link>
                    <Link to="/" className="dashboard-link">Reviews</Link>
                    <Link to="/" className="dashboard-link">Manage Orders</Link>
                    <button className="btn btn-secondary mt-6 mb-3" onClick={logOut}>Sign Out Now</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;