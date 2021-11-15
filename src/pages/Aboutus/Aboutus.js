import React from 'react';
import { Link } from 'react-router-dom';
import drone from '../../images/drone.png';

const Aboutus = () => {
    return (
        <section className="container pt-36 pb-12 responsive-grid-2col">
            <div>
                <img src={drone} alt="" className="w-full" />
            </div>
            <div className="space-y-6">
                <p className="py-2 text-primary font-bold text-lg">What is Drone BD?</p>
                <h2 className="text-4xl">Overview about Drone BD</h2>
                <p className="leading-6">Drone BD provide the latest hot drone which is release in market in 3 months. If you love drone and if you have a passion about drone, then you can buy a drone from us. We give a 2 years of warenty on each and every drone. So shop now and stay with us by subscribe our website. Because, we send all information about every drone after release.</p>
                <Link to="/"><button className="btn btn-primary mt-6">Learn More</button></Link>
            </div>
        </section>
    );
};

export default Aboutus;