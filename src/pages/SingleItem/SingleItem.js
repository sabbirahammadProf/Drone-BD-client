import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SingleItem = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { droneId } = useParams();
    const [drone, setDrone] = useState({});
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://fathomless-plateau-47154.herokuapp.com/drone/${droneId}`)
            .then(res => res.json())
            .then(data => {
                setDrone(data[0]);
            })
    }, []);

    const handlePurchase = (data) => {
        data.orderItem = drone.name;
        data.orderItemId = drone._id;
        data.orderItemPrice = drone.price;
        data.pending = 'pending';
        fetch('https://fathomless-plateau-47154.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setSuccess('Your order placed successfully!!')
                    reset();
                } else {
                    setError('An error occured, please try again!')
                }
            });
    }

    return (
        <div className="container py-10">
            <div className="responsive-grid-2col">
                <div>
                    <img src={drone.image} alt="" className="w-full rounded" />
                </div>
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold">{drone.name}</h2>
                    <p>{drone.description}</p>
                    <h4 className="text-2xl font-bold">Price: ${drone.price}</h4>
                    <p>Available colors: {drone.colors}</p>
                    <p>In stock: {drone.stock}</p>
                </div>
            </div>
            <div className="mt-24 mb-6 w-6/12 mx-auto">
                <h3 className="text-2xl pb-6">Enter your info to purchase the product</h3>
                {success ? <p className="bg-success rounded px-2 py-2 text-white text-center my-2">{success}</p> : ''}
                {error ? <p className="bg-danger rounded px-2 py-2 text-white text-center my-2">{error}</p> : ''}
                <form className="space-y-4 flex flex-col items-center" onSubmit={handleSubmit(handlePurchase)}>
                    <input type="text" className="formInput w-full" placeholder="Your name" value={user.displayName} readOnly {...register("name", { required: true })} />
                    {errors.name && <p className="text-danger">Name is required</p>}
                    <input type="email" className="formInput w-full" placeholder="Your email" value={user.email} readOnly {...register("email", { required: true })} />
                    {errors.email && <p className="text-danger">Email is required</p>}
                    <input type="text" className="formInput w-full" placeholder="Address" {...register("address", { required: true })} />
                    {errors.address && <p className="text-danger">Address is required</p>}
                    <input type="text" className="formInput w-full" placeholder="State" {...register("state", { required: true })} />
                    {errors.state && <p className="text-danger">State is required</p>}
                    <input type="number" className="formInput w-full" placeholder="Zip code" {...register("zipCode", { required: true })} />
                    {errors.zipCode && <p className="text-danger">Zip code is required</p>}
                    <input type="number" className="formInput w-full" placeholder="Phone number" {...register("phoneNumber", { required: true })} />
                    {errors.phoneNumber && <p className="text-danger">Phone number is required</p>}
                    <button className="btn btn-secondary w-10/12">Purchase Now</button>
                </form>
            </div>
        </div>
    );
};

export default SingleItem;