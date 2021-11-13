import React from 'react';
import { Link } from 'react-router-dom';
import drone from '../../../images/drone.png';

const Products = () => {
    return (
        <section className="container py-6">
            <h2 className="text-4xl font-bold">Our latest products</h2>
            <p className="text-xl pt-2">We launched our new products. If you want to buy latest products, lets check the drone's.</p>
            <div className="responsive my-10">
                <div className="card">
                    <img src={drone} alt="" className="card-head" />
                    <h3 className="card-title">Black drone</h3>
                    <p>This drone is best. It would not be lost because it has an advance feature.</p>
                    <button className="btn btn-primary w-full mt-4"><Link to='/'>Buy Now</Link></button>
                </div>
                <div className="card">
                    <img src={drone} alt="" className="card-head" />
                    <h3 className="card-title">Black drone</h3>
                    <p>This drone is best. It would not be lost because it has an advance feature.</p>
                    <button className="btn btn-primary w-full mt-4"><Link to='/'>Buy Now</Link></button>
                </div>
                <div className="card">
                    <img src={drone} alt="" className="card-head" />
                    <h3 className="card-title">Black drone</h3>
                    <p>This drone is best. It would not be lost because it has an advance feature.</p>
                    <button className="btn btn-primary w-full mt-4"><Link to='/'>Buy Now</Link></button>
                </div>
            </div>
        </section>
    );
};

export default Products;