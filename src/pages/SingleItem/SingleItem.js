import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const SingleItem = () => {
    const { droneId } = useParams();
    const [drone, setDrone] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/drone/${droneId}`)
            .then(res => res.json())
            .then(data => {
                setDrone(data[0]);
            })
    }, []);
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
                    <button className="btn btn-secondary">Purchase now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;