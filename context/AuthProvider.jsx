import React, { useState, useEffect, createContext } from 'react';
import firebase from 'firebase';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser);
    }, []);

    return (
        <AuthContext.Provider value={{user}}>
            { children }
        </AuthContext.Provider>
    )
}