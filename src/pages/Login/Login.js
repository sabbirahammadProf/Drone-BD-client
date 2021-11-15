import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../images/login.svg';

const Login = () => {
    return (
        <div className="responsive-grid-2col container py-20 items-center">
            <div>
                <img src={loginImage} alt="" />
            </div>
            <div className="space-y-6 flex flex-col items-center">
                <h2 className="text-3xl font-bold">Login to your account</h2>
                <input type="text" className="formInput" placeholder="Enter your email address" />
                <input type="text" className="formInput" placeholder="Enter your password" />
                <button className="btn btn-primary w-10/12">Login Now</button>
                <p>Dont have an account? <Link className="text-primary font-bold" to="/signup">Sign Up now</Link></p>
            </div>
        </div>
    );
};

export default Login;