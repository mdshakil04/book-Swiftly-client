/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // Create user with email and password
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    // -------------Sign In User------------------------
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(email, password);
    }
    // ----------Log Out User------------------------
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    // ---------------------------------------------------
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log("Current User", currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user, 
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;