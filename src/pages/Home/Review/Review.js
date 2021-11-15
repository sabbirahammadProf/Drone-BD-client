import React from 'react';
import drone from '../../../images/drone.png';

const Review = () => {
    return (
        <section className="container pt-16 pb-28">
            <h2 className="text-3xl font-bold">What clients say's about us</h2>
            <div className="responsive-grid mt-14">
                <div className="card text-center">
                    <img src={drone} alt="" className="rounded-full w-3/12 mx-auto border my-6" />
                    <h3 className="text-2xl font-bold">Mr Hasan</h3>
                    <ul className="pt-4 flex justify-center space-x-2">
                        <li><i class="fas fa-star text-yellow"></i></li>
                        <li><i class="fas fa-star text-yellow"></i></li>
                        <li><i class="fas fa-star text-yellow"></i></li>
                        <li><i class="fas fa-star text-yellow"></i></li>
                        <li><i class="far fa-star text-yellow"></i></li>
                    </ul>
                    <p className="pt-4 pb-4 leading-9"><sup className="mr-2 text-xl text-primary"><i class="fas fa-quote-left"></i></sup>I saw many site's which provide drone. But, I find it and it is one of the best I have seen ever i think.<sup className="text-xl"><i class="fas fa-quote-right ml-2 text-primary"></i></sup></p>
                </div>
            </div>
        </section>
    );
};

export default Review;