import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';


const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)


    // Create User
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Update User data

    const updateUserProfile = (UpdateData)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,UpdateData)
    }

    const authInfo = {
        loading,
        createUser,
        updateUserProfile,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;