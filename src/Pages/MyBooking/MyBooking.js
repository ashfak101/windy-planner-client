
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
    const {user}=useAuth();
    const email =user?.email
    const [mybooking,setMyBooking]=useState([])
    console.log(email);
   useEffect(()=>
    fetch(`https://gruesome-goblin-68519.herokuapp.com/mybooking/${email}`)
    .then(res=>res.json())
    .then(data=>setMyBooking(data))
   ,[]);
   console.log(mybooking);
   const handleBooking=(id)=>{
        const procced = window.confirm('are you sure? you want to Cancel booking')
        if(procced){
            const url=`https://gruesome-goblin-68519.herokuapp.com/mybooking/${id}`;
        fetch(url,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>
            {
                if(data.deletedCount>0){
                    alert('Cancel Successfully')
                    const existing =mybooking.filter(booked=>booked._id!==id)
                    setMyBooking(existing)
                }
            })
        }
   }
  
    return ( 
        <div className='container text-center my-5'>
           
           <div className='user' >
                <h1>Your Booking  Packagename : {mybooking[0]?.PackageName}</h1>

                <p>want to cancel your booking</p>
                <button onClick={()=>handleBooking(mybooking[0]._id)} className="btn btn-warning">Cancel</button>
           </div>
          
        </div>
    );
};

export default MyBooking;