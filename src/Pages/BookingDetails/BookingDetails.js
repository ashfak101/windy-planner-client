import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const BookingDetails = () => {
    const {bookingId}= useParams();
   
    const [booking,setBooking]=useState([]);
        const {user}=useAuth();
    useEffect(()=>{
        axios(`https://gruesome-goblin-68519.herokuapp.com/services${bookingId}`)
        .then(res=>setBooking(res.data))
    },[]);
    const users ={
        email:user.email,
        name:user.displayName,
       

    }
    
    const { register, handleSubmit,reset } = useForm({
        defaultValues: users
    });
    const onSubmit = data => {
        axios.post('https://gruesome-goblin-68519.herokuapp.com/userorders',data)
        .then(res=>{
            if(res.data.insertedId){
              alert("Your Data Add Successfully");
              reset();
            }
          })
    }
    
    return (
        <div className='container mt-4'>
            <div>

            </div>
            <Row xs={1} md={2} lg={2} className="g-4">
                <Col>
                    <h3>Your Booking Details</h3>
                    <img src={booking?.img} alt="" />
                    <h4>Tour Package Name: {booking?.name}</h4>
                    <p>Number of People : {booking?.number} people</p>
                    <p>Your Package Duration: {booking?.duration} Days</p>
                    <h5>Package Price : {booking?.price}$</h5>
                </Col>
                <Col>
                    <h3>Please Give Your Information for Booking </h3>

                    <form onSubmit={handleSubmit(onSubmit)} className='form my-4'>
                      
                        <input {...register("name")} /> <br />
                        
                        
                        
                        <input {...register("email", { required: true })}  /> <br />
                        <input {...register("ConfirmEmail", { required: true })} placeholder="Confirm Email" /> <br />
                        <input  {...register("PackageName")} placeholder="Package Name" /> <br />
                        
                        <input type='date' {...register("Date")} /> <br />
                        <input {...register("Address")} placeholder="Address" /> <br />
                        <input type='number' {...register("Phone")} placeholder="Phone" /> <br />
                        
                       
      
                        <input type="submit" />
                </form>
                </Col>
            </Row>
        </div>
    );
};

export default BookingDetails;