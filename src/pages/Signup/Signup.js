import React from 'react';
import { Link } from 'react-router-dom';
import registerImage from '../../images/register.svg';

const Signup = () => {
    return (
        <div className="responsive-grid-2col container py-20 items-center">
            <div className="space-y-6 flex flex-col items-center">
                <h2 className="text-3xl font-bold">Create an new account</h2>
                <input type="text" className="formInput" placeholder="Enter your name" />
                <input type="text" className="formInput" placeholder="Enter your email address" />
                <input type="text" className="formInput" placeholder="Enter your password" />
                <button className="btn btn-primary w-10/12">Signup Now</button>
                <p>Already have an account? <Link className="text-primary font-bold" to="/login">Login now</Link></p>
            </div>
            <div>
                <img src={registerImage} alt="" />
            </div>
        </div>
    );
};

export default Signup;