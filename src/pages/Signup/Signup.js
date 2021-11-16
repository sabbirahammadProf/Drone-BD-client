import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { updateProfile } from '@firebase/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import registerImage from '../../images/register.svg';

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { setError, error, createAnNewUser, auth, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const uri = location?.state?.from ? location?.state?.from : '/dashboard';

    const onSubmit = (data) => {
        if (data.password.length < 6) {
            setError('Password at least be 6 character');
        } else {
            setError('');
            createAnNewUser(data.email, data.password)
                .then(result => {
                    updateProfile(auth.currentUser, {
                        displayName: data.name
                    });
                    setUser(result.user);
                    history.push(uri);
                })
                .catch(err => setError(err.message))
                .finally(() => {
                    setIsLoading(false)
                    reset();
                });
        }
    }

    return (
        <div className="responsive-grid-2col container py-20 items-center">
            <div className="space-y-6 flex flex-col items-center w-full">
                <h2 className="text-3xl font-bold">Create a new account</h2>
                {error ? <p className="bg-danger rounded py-2 px-6 text-white">{error}</p> : ''}
                {errors.name && <p className="text-danger">**Name is required</p>}
                {errors.email && <p className="text-danger">**Email is required</p>}
                {errors.password && <p className="text-danger">**Password is required</p>}
                <form className="space-y-6 text-center" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className="formInput" placeholder="Enter your name" {...register("name", { required: true })} />
                    <input type="email" className="formInput" placeholder="Enter your email address" {...register("email", { required: true })} />
                    <input type="password" className="formInput" placeholder="Enter your password" {...register("password", { required: true })} />
                    <button className="btn btn-primary w-10/12">Signup Now</button>
                </form>
                <p>Already have an account? <Link className="text-primary font-bold" to="/login">Login now</Link></p>
            </div>
            <div>
                <img src={registerImage} alt="" />
            </div>
        </div>
    );
};

export default Signup;