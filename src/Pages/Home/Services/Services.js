import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        axios('https://gruesome-goblin-68519.herokuapp.com/services')
        .then(res=>setServices(res.data))
    },[])
    return (
        <div className='container' >
           <div>
           <h1 className='text-center mt-5 mb-5 text-primary'> Our Service</h1>
           <hr />
           </div>
           <Row xs={1} md={2} lg={3} className="g-4">
               {
                   services.map(service=> <Service
                   key={service._id}
                   service={service}
                   
                   
                   ></Service>)
               }
           </Row>
        </div>
    );
};

export default Services;