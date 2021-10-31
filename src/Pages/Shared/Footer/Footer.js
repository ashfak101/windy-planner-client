import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-color mt-4'>
            <div className="container p-4">
                <Row xs={1} md={2} lg={3} className='text-white'>

                    <Col>
                        <h1>Windy Planners</h1>
                        <div class="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-warning" type="button" id="button-addon2">Subscribe</button>
                    </div>
                    </Col>
                    <Col>
                        <h2>Navigation</h2>

                            <li className='mb-2' >Home</li>
                            <li className='mb-2'>About</li>
                            <li className='mb-2'>Tour</li>
                            <li className='mb-2'>Blog</li>
                            <li>Contact us</li>
                    </Col>
                    <Col>
                        <h2>Need Help ?</h2>

                        <h6>Call us</h6>
                        <p>+1234567</p>
                        <h6>Email for us</h6>
                        <p>admin@admin.com</p>
                        <h6>Location</h6>
                        <p>Main street,Victoria 8oo7.</p>
                    </Col>
                </Row>
                <hr className='text-warning' />
                <p className='text-center text-warning'>Copyright © 2021 windy planner. All Rights Reserved.</p>
            </div>

        </div>
    );
};

export default Footer;