import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // Create User with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update User data
  const updateUserProfile = (UpdateData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, UpdateData);
  };

  // Sign In User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Sign In
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    loading,
    createUser,
    updateUserProfile,
    signInUser,
    googleSignIn,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
