import firebase from 'firebase';
import { useCallback, useState } from 'react';

export const useAuth = () => {
    const [loginData, setLoginData] = useState({email: '', password: ''});

    const handleEmail = (value) => {
        setLoginData({...loginData, email: value.trim()});
    }

    const handlePassword = (value) => {
        setLoginData({...loginData, password: value.trim()});
    }

    const handleSignUp = useCallback(async () => {
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(loginData.email, loginData.password)
        } catch (error) {
            console.warn(error);
        }
    });

    const handleSignIn = useCallback(async () => {
        try {
            await firebase
                .auth()
                .signInWithEmailAndPassword(loginData.email, loginData.password)
        } catch (error) {
            console.warn(error);
        }
    });

    const signOut = () => {
        firebase.auth().signOut();
    }

    return {
        loginData,
        setLoginData,
        handleEmail,
        handlePassword,
        handleSignUp,
        handleSignIn,
        signOut
    }
}