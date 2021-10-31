import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../Image/Banner/banner1.jpg'
import banner2 from '../../../Image/Banner/banner2.jpg'
import banner3 from '../../../Image/Banner/banner3.jpg'

const Banner = () => {
    return (
       <div >
            <Carousel className=''>
            <Carousel.Item>
                <img
                className="d-block img-fluid w-100 bg"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption className='m-7'>
                <h1 className='text-warning'>Life is Short And The World Is wide</h1>
                <p>A Journey of a 1000 miles start with a single step.Planning to travel anytime soon.Book Your desire Destination for Travel</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block img-fluid w-100 bg"
                src={banner2}
                alt="Second slide"
                />

                <Carousel.Caption className='m-7'>
                <h3 className='text-warning' >It feels good to be lost in the right direction</h3>
                <p>A Journey of a 1000 miles start with a single step.Planning to travel anytime soon.Book Your desire Destination for Travel</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block img-fluid w-100 bg "
                src={banner3}
                alt="Third slide"
                />

                <Carousel.Caption className='m-7'>
                <h3 className='text-warning'>There’s a sunrise and a sunset every single day, <br /> and they’re absolutely free. Don’t miss so many of them</h3>
                <p>A Journey of a 1000 miles start with a single step.Planning to travel anytime soon.Book Your desire Destination for Travel</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
       </div>
    );
};

export default Banner;