import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import React from 'react';
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {createUser,login}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;