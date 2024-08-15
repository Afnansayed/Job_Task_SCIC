import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import React from 'react';
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
     
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
                     setUser(currentUser);
                     setLoading(false);
                     console.log('Current user is: ',currentUser);
        })
    },[])

    const authInfo = {createUser,login,logout,user,loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;