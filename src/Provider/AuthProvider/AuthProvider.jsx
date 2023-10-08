import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.config';


export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
   const [user, setUser] = useState([]);
   const [loading, setLoading] = useState(true)

   const createUser = (email, password, name, photo) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password, name, photo) 
   }

   const logInUser = (email, password) =>{
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
   }
  
   const logOut = () =>{
    setLoading(true)
    return signOut(auth)
 }
 const google = () =>{
    setLoading(true)
   return signInWithPopup(auth, provider)
 }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
           })
           return () =>{
            unSubscribe();
           }
    },[])
  
   
    
    const authInfo = {user, createUser, logInUser, logOut, google, loading}
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;