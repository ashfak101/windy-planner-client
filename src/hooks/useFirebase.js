import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";


initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const auth=getAuth()

    const googleProvider=new GoogleAuthProvider();

    const signInWithGoolge=()=>{
      return  signInWithPopup(auth,googleProvider)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,user=>
         {
             if(user){
                 setUser(user)
             }
             else{
                 setUser({})
             }
             setIsLoading(false)
         });
         return ()=>unSubscribe
     },[])

     const logOut=()=>{
        
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
          })
          
          .catch((error) => {
            // An error happened.
          })}
    return{
        user,
        setUser,
        signInWithGoolge,
        logOut,isLoading,
        setIsLoading
    }
}

export default useFirebase;