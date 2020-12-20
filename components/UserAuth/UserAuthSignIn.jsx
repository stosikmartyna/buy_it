import React, { useState, useCallback } from 'react';
import firebase from 'firebase';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './UserAuth.styles';

export const UserAuthSignIn = ({ setIsSignInForm }) => {
    const [loginData, setLoginData] = useState({email: '', password: ''});

    const handleEmail = (value) => {
        setLoginData({...loginData, email: value});
    }

    const handlePassword = (value) => {
        setLoginData({...loginData, password: value});
    }

    const handleSignIn = useCallback(
        async () => {
        try {
            await firebase
                .auth()
                .signInWithEmailAndPassword(loginData.email, loginData.password)
        } catch (error) {
            console.warn(error);
        }
    });

    return (
        <View>
            <TextInput 
                placeholder={'Mail'}
                value={loginData.email}
                onChangeText={handleEmail}
                style={styles.input}
            />
            <TextInput 
                placeholder={'Password'}
                value={loginData.password}
                onChangeText={handlePassword}
                secureTextEntry={true}
                style={styles.input}
            />
            <Button color={'#689FEF'} title={'Sign In'} onPress={handleSignIn} />
            <Text 
                style={styles.textSignUp} 
                onPress={() => setIsSignInForm(false)}
            >
                Create account
            </Text>
        </View>
    )
}