import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container text-center my-5 py-5'>
            <h1>Opps404 </h1>
            <h2>Page Not Found</h2>
            <Link  to='/home'> <button  className="btn btn-warning">Go Back</button></Link>
           
        </div>
    );
};

export default NotFound ;