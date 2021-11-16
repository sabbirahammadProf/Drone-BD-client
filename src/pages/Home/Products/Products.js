import React from 'react';
import { Link } from 'react-router-dom';
import drone from '../../../images/drone.png';

const Products = () => {
    return (
        <section className="container py-6">
            <h2 className="text-4xl font-bold">Our latest products</h2>
            <p className="text-xl pt-2">We launched our new products. If you want to buy latest products, lets check the drone's.</p>
            <div className="responsive-grid my-10">
                <div className="card">
                    <img src={drone} alt="" className="card-head" />
                    <h3 className="card-title">Black drone</h3>
                    <p>This drone is best. It would not be lost because it has an advance feature.</p>
                    <Link to="/drone/1"><button className="btn btn-primary w-full mt-4">Buy Now</button></Link>
                </div>
                <div className="card">
                    <img src={drone} alt="" className="card-head" />
                    <h3 className="card-title">Black drone</h3>
                    <p>This drone is best. It would not be lost because it has an advance feature.</p>
                    <Link to="/drone/2"><button className="btn btn-primary w-full mt-4">Buy Now</button></Link>
                </div>
                <div className="card">
                    <img src={drone} alt="" className="card-head" />
                    <h3 className="card-title">Black drone</h3>
                    <p>This drone is best. It would not be lost because it has an advance feature.</p>
                    <Link to="/drone/3"><button className="btn btn-primary w-full mt-4">Buy Now</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Products;