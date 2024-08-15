import { createContext } from "react";


export const AuthContext = createContext(null);

import React from 'react';

const AuthProviders = ({children}) => {

    const authInfo = { name: 'sabbir'}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;