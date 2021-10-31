import axios from 'axios';
import React, { useEffect,  useState } from 'react';
import { useParams } from 'react-router';

const OrderUpdate = () => {
    const {id}=useParams();

    const [update,setUpdate]=useState({});

    useEffect(()=>{
        axios(`https://gruesome-goblin-68519.herokuapp.com/userorders/${id}`)
        .then(res=>setUpdate(res.data))
    },[]);
// Update booking
    const handleName=e=>{
        const updatedName=e.target.value;
        const updatedBooking={name:updatedName,email:update.email,PackageName:update.PackageName,Date:update.Date,Address:update.Address,Phone:update.Phone}
        setUpdate(updatedBooking)
    }
    const handleEmail=e=>{
        const updatedEmail=e.target.value;
        const updatedBooking={name:update.name,email:updatedEmail,PackageName:update.PackageName,Date:update.Date,Address:update.Address,Phone:update.Phone}
        setUpdate(updatedBooking)
    }
    const handlePack=e=>{
        const updatedPack=e.target.value;
        const updatedBooking={name:update.name,email:update.email,PackageName:updatedPack,Date:update.Date,Address:update.Address,Phone:update.Phone}
        setUpdate(updatedBooking)
    }
    const handleDate=e=>{
        const updatedDate=e.target.value;
        const updatedBooking={name:update.name,email:update.email,PackageName:update.PackageName,Date:updatedDate,Address:update.Address,Phone:update.Phone}
        setUpdate(updatedBooking)
    }
    const handleAddress=e=>{
        const updatedAdd=e.target.value;
        const updatedBooking={name:update.name,email:update.email,PackageName:update.PackageName,Date:update.Date,Address:updatedAdd,Phone:update.Phone}
        setUpdate(updatedBooking)
    }
    const handlePhone=e=>{
        const updatedPhone=e.target.value;
        const updatedBooking={name:update.name,email:update.email,PackageName:update.PackageName,Date:update.Date,Address:update.Address,Phone:updatedPhone}
        setUpdate(updatedBooking)
    }
    const handleSubmit=e=>{
     const procced= window.confirm('Are you sure,you want to update ')
     if(procced){
        const   url =`https://gruesome-goblin-68519.herokuapp.com/userorders/${id}`
        fetch(url,{
           method:'PUT',
           headers:{
               'content-type':'application/json'
           },
           body: JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('Your Data Updated Successfully')
                setUpdate({})
            }
       })
     }
        e.preventDefault()
    }
    return (
        <div className='container'>
            <h1 className='text-primary text-center my-3'> Update Booking</h1>
           
            <form onSubmit={handleSubmit} className='form'>
                <input type="text"   onChange={handleName} value={update.name || ''} /> <br />
                <input type="email"  onChange={handleEmail} value={update.email || ''} /> <br />
                <input type="text"   onChange={handlePack} value={update.PackageName || ''}  /> <br />
                <input type="date"   onChange={handleDate} value={update.Date || ''} /> <br />
                <input type="text"   onChange={handleAddress}  value={update.Address || ''}  /> <br />
                <input type="number" onChange={handlePhone}  value={update.Phone || ''} /> <br />
                <input type="submit"  value="update" />
            </form>
        </div>
    );
};

export default OrderUpdate;