import React from 'react';
import { Link } from 'react-router-dom';
import droneImg from '../../../images/drone.png';

const HeroArea = () => {
    return (
        <section className="container responsive-2col items-center h-screen gap-12">
            <div>
                <h1 className="text-6xl">Find you favourite drone!!</h1>
                <p className="pt-3 pb-5">Are you love drone? If your answer is "YES" then stay in our website. Because, we provide the best drone's in Bangladesh. If you want to choose your favourite drone, visit explore page.</p>
                <Link className="btn btn-primary" to="/explore">Learn More &raquo;</Link>
            </div>
            <div>
                <img src={droneImg} alt="" className="w-full" />
            </div>
        </section>
    );
};

export default HeroArea;