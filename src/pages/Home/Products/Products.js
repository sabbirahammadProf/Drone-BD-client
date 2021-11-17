import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

const Products = () => {
    const [drones, setDrones] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/drones?homeQtity=6')
            .then(res => res.json())
            .then(data => setDrones(data))
    }, []);


    return (
        <section className="container py-6">
            <h2 className="text-4xl font-bold">Our latest products</h2>
            <p className="text-xl pt-2">We launched our new products. If you want to buy latest products, lets check the drone's.</p>
            <div className="responsive-grid my-10">
                {
                    drones.map((drone) => <div key={drone._id} className="card">
                        <img src={drone.image} alt="" className="card-head" />
                        <h3 className="card-title">{drone.name}</h3>
                        <p>{drone.description}</p>
                        <Link to={`/drone/${drone._id}`}><button className="btn btn-primary w-full mt-4">Buy Now</button></Link>
                    </div>)
                }
            </div>
        </section >
    );
};

export default Products;