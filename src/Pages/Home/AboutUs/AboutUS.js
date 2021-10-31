import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Img1 from '../../../Image/travel.jpg'
import './AboutUS.css'
import Button from 'react-bootstrap/Button'

const AboutUS = () => {
    return (
        <div className='container m-top'>
            <h1 className='text-center mb-5 text-primary'>About Windy Holiday Planners</h1>
            <hr />

            <Row xs={1} md={2} lg={2} className="g-4">
                <Col className='p-3 bg-border'>
                <div>
                    <img className='img-fluid' src={Img1} alt="" />
                </div>
                </Col>
                <Col className='p-3'>
                <h3 className='text-primary mb-5'>
                    About US
                </h3>
                <h2 className='mb-3'>
                Plan Your Trip with Us 
                </h2>
                
                <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline
                </p>

                <Button variant="outline-primary">Thanks You</Button>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUS;