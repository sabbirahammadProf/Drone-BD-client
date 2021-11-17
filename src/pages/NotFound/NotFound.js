import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.svg';

const NotFound = () => {
    return (
        <div className="container pb-24 pt-10">
            <img src={notFound} alt="" className="w-7/12 mx-auto" />
            <p className="text-2xl pt-10 text-center">Page not found! Please return to <Link to="/" className="text-primary font-bold">Homepage</Link></p>
        </div>
    );
};

export default NotFound;