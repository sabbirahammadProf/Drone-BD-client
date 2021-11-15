import React from 'react';
import { Link } from 'react-router-dom';
import drone from '../../images/drone.png';

const Explore = () => {
    return (
        <div className="container pb-20">
            <h2 className="text-3xl font-bold text-center pt-10">Explore our all the drones</h2>
            <div className="responsive-grid my-10">
                <div className="card">
                    <img src={drone} alt="" className="card-head" />
                    <h3 className="card-title">Black drone</h3>
                    <p>This drone is best. It would not be lost because it has an advance feature.</p>
                    <Link to="/"><button className="btn btn-primary w-full mt-4">Buy Now</button></Link>
                </div>
                <div className="card">
                    <img src={drone} alt="" className="card-head" />
                    <h3 className="card-title">Black drone</h3>
                    <p>This drone is best. It would not be lost because it has an advance feature.</p>
                    <Link to="/"><button className="btn btn-primary w-full mt-4">Buy Now</button></Link>
                </div>
                <div className="card">
                    <img src={drone} alt="" className="card-head" />
                    <h3 className="card-title">Black drone</h3>
                    <p>This drone is best. It would not be lost because it has an advance feature.</p>
                    <Link to="/"><button className="btn btn-primary w-full mt-4">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Explore;