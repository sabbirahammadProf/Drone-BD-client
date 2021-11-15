import React from 'react';
import Aboutus from '../Aboutus/Aboutus';
import HeroArea from './HeroArea/HeroArea';
import Products from './Products/Products';
import Review from './Review/Review';
const Home = () => {
    return (
        <>
            <HeroArea></HeroArea>
            <Products></Products>
            <Aboutus></Aboutus>
            <Review></Review>
        </>
    );
};

export default Home;