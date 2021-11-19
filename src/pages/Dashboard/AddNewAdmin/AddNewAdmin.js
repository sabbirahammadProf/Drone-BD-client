import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddNewAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleAdmin = (data) => {
        setSuccess('');
        setError('');
        fetch(`https://fathomless-plateau-47154.herokuapp.com/users?email=${data.email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setSuccess('A new admin added successfully');
                    reset();
                } else if (data.error) {
                    setError('User not found!')
                }
            });
    }
    return (
        <div className="flex flex-col items-center justify-center h-full">
            {success ? <p className="bg-success rounded px-2 py-2 text-white text-center my-2">{success}</p> : ''}
            {error ? <p className="bg-danger rounded px-2 py-2 text-white text-center my-2">{error}</p> : ''}
            <form onSubmit={handleSubmit(handleAdmin)} className="w-7/12 space-y-4 text-center">
                <input type="text" className="formInput" placeholder="Email of an user" {...register("email", { required: true })} />
                <button className="btn btn-primary w-10/12">Make admin</button>
            </form>
        </div>
    );
};

export default AddNewAdmin;