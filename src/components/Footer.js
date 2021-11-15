import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary pt-12 pb-20">
            <div className="responsive-grid container">
                <div>
                    <h4 className="text-3xl text-white">Usefull Links</h4>
                    <ul className="pt-3 flex flex-col space-y-1">
                        <Link to="/" className="text-white">&raquo; Top ten drons</Link>
                        <Link to="/" className="text-white">&raquo; New drones</Link>
                        <Link to="/" className="text-white">&raquo; Explore</Link>
                        <Link to="/" className="text-white">&raquo; Affiliate</Link>
                    </ul>
                </div>
                <div>
                    <h4 className="text-3xl text-white">About Us</h4>
                    <p className="text-white pt-3">We are providing the best drones in Bangladesh right now. We provide Official, Unofficial drone. Our official drones are verified by Goverment.</p>
                </div>
                <div>
                    <h4 className="text-3xl text-white">Important Links</h4>
                    <ul className="pt-3 flex flex-col space-y-1">
                        <Link to="/" className="text-white">&raquo; About</Link>
                        <Link to="/" className="text-white">&raquo; Contact</Link>
                        <Link to="/" className="text-white">&raquo; Privacy and Policy</Link>
                        <Link to="/" className="text-white">&raquo; Terms and Condition</Link>
                        <Link to="/" className="text-white">&raquo; Disclaimer</Link>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;