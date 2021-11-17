import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import drone from '../../images/drone.png';

const Explore = () => {
    const [allDrones, setAllDrones] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/alldrones')
            .then(res => res.json())
            .then(data => setAllDrones(data))
    }, []);

    return (
        <div className="container pb-20">
            <h2 className="text-3xl font-bold text-center pt-10">Explore our all the drones</h2>
            <div className="responsive-grid my-10">
                {
                    allDrones.map((drone) => <div key={drone._id} className="card">
                        <img src={drone.image} alt="" className="card-head" />
                        <h3 className="card-title">{drone.name}</h3>
                        <p>{drone.description}</p>
                        <p className="text-xl font-bold py-3">Price: ${drone.price}</p>
                        <Link to={`/drone/${drone._id}`}><button className="btn btn-primary w-full mt-4">Buy Now</button></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Explore;