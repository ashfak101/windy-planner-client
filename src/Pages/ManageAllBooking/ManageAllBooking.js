import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const ManageAllBooking = () => {
    const [allBooking,setAllbooking]=useState([])



    
    useEffect(()=>{
        axios.get('https://gruesome-goblin-68519.herokuapp.com/userorders')
        .then(res=>setAllbooking(res.data))
    },[])
    const handleDeleteBooking=id=>{
       const proceed= window.confirm('Are you Sure,you want delete?')
       if(proceed){
        const url=`https://gruesome-goblin-68519.herokuapp.com/userorders/${id}`;
        fetch(url,{
            method:'DELETE',
           
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('deleted Successfully')
                const existing =allBooking.filter(booked=>booked._id!==id)
                setAllbooking(existing)
            }
        })
       }
    }
    return (
        <div className='container my-5'>
           <h2 className=' text-primary text-center mb-4'  > All User Booking</h2>
            <Row xs={1} md={2} lg={3}>
                {
                    allBooking.map(booking=><Col 
                        key={booking._id}>
                        <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header>Booking by: {booking.name}</Card.Header>
                        <Card.Body>
                        <Card.Title>Package Name: {booking.PackageName} </Card.Title>
                        <Card.Text>
                        User Email : {booking.email}
                        </Card.Text>
                        <Card.Text className="d-flex justify-content-around"> 
                        <Link to={`/update/${booking._id}`}><Button variant="primary">Update</Button></Link>
                        <Button onClick={()=>handleDeleteBooking(booking._id)} variant="warning">Delete</Button>
                                </Card.Text>
                         </Card.Body>
                        </Card>
                   
                   </Col>
                    )}
            </Row>
        </div>
    );
};

export default ManageAllBooking;