import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const { user } = useAuth();

    const handleNewReview = (data) => {
        setSuccess('');
        setError('');
        fetch(`https://fathomless-plateau-47154.herokuapp.com/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setSuccess("New product added successfully!!");
                    setError('');
                    reset();
                } else {
                    setError('Your data is not inserted, please try again..');
                    setSuccess('');
                }
            })
    }

    return (
        <div>
            {success ? <p className="bg-success rounded px-2 py-2 text-white text-center my-2">{success}</p> : ''}
            {error ? <p className="bg-danger rounded px-2 py-2 text-white text-center my-2">{error}</p> : ''}
            <form className="space-y-4 flex flex-col items-center justify-center" onSubmit={handleSubmit(handleNewReview)}>
                <input type="text" className="formInput" placeholder="Reviewer name" {...register("name", { required: true })} defaultValue={user.displayName} />
                <textarea type="text" className="formInput" placeholder="Reviwer description" {...register("description", { required: true })} />
                <input type="url" className="formInput" placeholder="Reviewer image url" {...register("image", { required: true })} />
                <input type="text" className="formInput" placeholder="Rating" {...register("rating", { required: true })} />
                <button className="btn btn-secondary w-10/12">Add New Review</button>
            </form>
        </div>
    );
};

export default Review;