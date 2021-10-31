import React from 'react';
import AboutUS from '../AboutUs/AboutUS';
import Banner from '../Banner/Banner';
import ImageGalary from '../ImageGalary/ImageGalary';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <AboutUS></AboutUS>
            <Services></Services>
            <ImageGalary></ImageGalary>
        </>
    );
};

export default Home;