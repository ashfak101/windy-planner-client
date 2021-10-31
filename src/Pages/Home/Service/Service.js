import Button from 'react-bootstrap/Button'
import React from 'react';
import {  Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock ,faUser} from '@fortawesome/free-solid-svg-icons'
import './Service.css'

const Service = (props) => {
    const {name,img,number,duration,price,description,_id}=props.service;
    const clock = <FontAwesomeIcon icon={faClock}/>
    const user = <FontAwesomeIcon icon={faUser}/>
    return (
        <div>
            <Col className="shadow-sm p-3 mb-5 bg-body rounded">
                <Card className='border-primary'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {description.slice(0,120)}
                    </Card.Text>
                   <Card.Text className="d-flex justify-content-around"> 
                       <span>Duration <br />{clock} {duration} days </span>  <span>Group Size <br />{user} {number} people  </span>
                    </Card.Text>
                   <Card.Text className="d-flex justify-content-around"> 
                       <span className=" btn-price">Package:${price}</span>  <Link to={`/bookingDetails/${_id}`}><span><Button variant="primary">Book Now</Button></span></Link>
                    </Card.Text>
                    
                    </Card.Body>
                </Card>
    </Col>
        </div>
    );
};

export default Service;