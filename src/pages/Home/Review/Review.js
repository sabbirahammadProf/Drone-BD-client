import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);

    return (
        <section className="container pt-16 pb-28">
            <h2 className="text-3xl font-bold">What clients say's about us</h2>
            <div className="responsive-grid mt-14">
                {
                    reviews.map((review) => <div className="card text-center" key={review._id}>
                        <img src={review.image} alt="" className="rounded-full w-3/12 mx-auto border my-6" />
                        <h3 className="text-2xl font-bold">{review.name}</h3>
                        <ul className="pt-4 flex justify-center space-x-2">
                            <li><ReactStars
                                count={'5'}
                                value={review.rating}
                                size={24}
                                half={true}
                            /></li>
                        </ul>
                        <p className="pt-4 pb-4 leading-9"><sup className="mr-2 text-xl text-primary"><i class="fas fa-quote-left"></i></sup>{review.description}<sup className="text-xl"><i class="fas fa-quote-right ml-2 text-primary"></i></sup></p>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Review;