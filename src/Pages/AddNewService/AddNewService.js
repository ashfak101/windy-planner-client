import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css'
const AddNewService = () => {
    const { register, handleSubmit,reset,formState: { errors } } = useForm();
    const onSubmit = data =>{
      console.log(data);
      axios.post('https://gruesome-goblin-68519.herokuapp.com/services',data)
      .then(res=>{
        if(res.data.insertedId){
          alert("Your Data Add Successfully");
          reset();
        }
      })
    }

    return (
        <div className='container'>
          <div>
          <h2 className='text-center text-warning'>Add A New Service</h2>
         
           <form onSubmit={handleSubmit(onSubmit)} className='form' >
              
              
                <input {...register("name", { required: true, maxLength: 30 })} placeholder='Service Name' />
                {errors.name?.type === 'required' && "Service Name is required"}
            
           
               <input {...register("img",{required:true, })} placeholder='img link'/>
               {errors.img?.type === 'required' && "Image is required"}
            
               
               <input type="number" {...register("number",{ required:true,  min: 1, max: 20 })} placeholder='How many Members'/>
               {errors.number?.type === 'required' && "IMembers is required"}
            
               
               <input type="number" {...register("duration", { required:true,  min: 1, max:9 })} placeholder='How many days'/>
               {errors.duration?.type === 'required' && "Days is required"}
           
               <input type="number" {...register("price",{required:true })} placeholder=' price'/>
               {errors.price?.type === 'required' && "Price is required"}
               
               <textarea {...register("description" ,{required:true, } )} placeholder='Description'/> 
      
                <input type="submit" />
            </form>
         
          </div>
        </div>
    );
};

export default AddNewService;