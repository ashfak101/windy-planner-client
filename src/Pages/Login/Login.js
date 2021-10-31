import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

     const {signInWithGoolge,setUser,setIsLoading} =  useAuth();

     const history=useHistory();
     const location= useLocation();
     const url=location.state?.from||'/home'
        const handleGoogleLogin=()=>{
            setIsLoading(true)
            signInWithGoolge()
            .then(res=>{
                console.log(res.user)
                setUser(res.user)
                history.push(url)
            })
            .catch(err=>console.log(err))
            .finally(()=>setIsLoading(false))
        }

    return (
        <div className='yellow-bg'>
            <div className='container text-center  py-5'>
           <h2>Please Login</h2>
           <p>We have Only Google Login </p>

            <button className='btn btn-outline-warning px-4 py-3' onClick={handleGoogleLogin}>Google </button>
        </div>
        </div>
    );
};

export default Login;