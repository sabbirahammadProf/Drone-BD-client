import React from 'react';
import { Link } from 'react-router-dom';
import droneImg from '../../../images/drone.png';

const HeroArea = () => {
    return (
        <section className="container responsive-grid-2col items-center h-screen gap-12">
            <div className="space-y-6">
                <h1 className="text-6xl">Find you favourite drone!!</h1>
                <p>Are you love drone? If your answer is "YES" then stay in our website. Because, we provide the best drone's in Bangladesh. If you want to choose your favourite drone, visit explore page.</p>
                <button className="btn btn-primary"><Link to="/explore">Learn More &raquo;</Link></button>
            </div>
            <div>
                <img src={droneImg} alt="" className="w-full" />
            </div>
        </section>
    );
};

export default HeroArea;