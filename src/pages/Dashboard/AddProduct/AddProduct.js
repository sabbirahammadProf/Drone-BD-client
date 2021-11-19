import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleNewProduct = (data) => {
        setSuccess('');
        setError('');
        fetch(`https://fathomless-plateau-47154.herokuapp.com/allDrones`, {
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
            <form className="space-y-4 flex flex-col items-center justify-center" onSubmit={handleSubmit(handleNewProduct)}>
                <input type="text" className="formInput" placeholder="Product name" {...register("name", { required: true })} />
                <textarea type="text" className="formInput" placeholder="Product description" {...register("description", { required: true })} />
                <input type="url" className="formInput" placeholder="Product image url" {...register("image", { required: true })} />
                <input type="number" className="formInput" placeholder="Product price" {...register("price", { required: true })} />
                <input type="text" className="formInput" placeholder="Available colors" {...register("colors", { required: true })} />
                <input type="number" className="formInput" placeholder="Product in stock" {...register("stock", { required: true })} />
                <button className="btn btn-secondary w-10/12">Add product</button>
            </form>
        </div>
    );
};

export default AddProduct;