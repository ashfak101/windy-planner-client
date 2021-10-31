import React from 'react';
import './ImageGalary.css'
import bali from '../../../Image/service/bali.jpg'
import greecc from '../../../Image/service/greece.jpg'
import india from '../../../Image/service/india.jpg'
import italy from '../../../Image/service/italy.jpg'
import swiss from '../../../Image/service/swiss.jpg'

const ImageGalary = () => {
    return (
        <div className='container'>
            <h1 className='text-center mt-5 mb-5 text-primary'>Our Image Gallery</h1>
           <hr />
           <div className="row g-0">
               <div className="col-lg-4 col-md-12 col-sm-12 h1">
                   <img className='img-fluid ' src={bali} alt="" />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                   <img className='img-fluid' src={greecc} alt="" />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                   <img className='img-fluid' src={india}  alt="" />
                </div>
               
           </div>
           <div className="row g-0">
           <div className="col-sm-12 col-md-12  col-lg-4 ">
                   <img  className='img-fluid' src={italy}  alt="" />
                </div>
                <div className="col-sm-12 col-lg-4 col-md-12 ">
                   <img className='img-fluid' src={swiss}  alt="" />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                   <img className='img-fluid' src={italy}  alt="" />
                </div>
           </div>
        </div>
    );
};

export default ImageGalary;