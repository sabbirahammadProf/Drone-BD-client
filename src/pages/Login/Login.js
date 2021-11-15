import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import loginImage from '../../images/login.svg';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { signInAnUser } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { setError, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const uri = location?.state?.from ? location?.state?.from : '/';

    const onSubmit = (data) => {
        setError('');
        signInAnUser(data.email, data.password)
            .then(result => {
                reset();
                history.push(uri);
            })
            .catch(err => setError(err.message))
    }
    return (
        <div className="responsive-grid-2col container py-20 items-center">
            <div>
                <img src={loginImage} alt="" />
            </div>
            <div className="space-y-6 flex flex-col items-center">
                <h2 className="text-3xl font-bold">Login to your account</h2>
                {error ? <p className="bg-danger rounded py-2 px-6 text-white">{error}</p> : ''}
                {errors.email && <p className="text-danger">**Email is required</p>}
                {errors.password && <p className="text-danger">**Password is required</p>}
                <form className="space-y-6 text-center" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className="formInput" placeholder="Enter your email address" {...register("email", { required: true })} />
                    <input type="password" className="formInput" placeholder="Enter your password" {...register("password", { required: true })} />
                    <button className="btn btn-primary w-10/12">Login Now</button>
                </form>
                <p>Dont have an account? <Link className="text-primary font-bold" to="/signup">Sign Up now</Link></p>
            </div>
        </div >
    );
};

export default Login;