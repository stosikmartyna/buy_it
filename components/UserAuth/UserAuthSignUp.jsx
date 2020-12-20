import React, { useCallback, useState } from 'react';
import firebase from 'firebase';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './UserAuth.styles';

export const UserAuthSignUp = ({ setIsSignInForm }) => {
    const [loginData, setLoginData] = useState({email: '', password: ''});

    const handleEmail = (value) => {
        setLoginData({...loginData, email: value});
    }

    const handlePassword = (value) => {
        setLoginData({...loginData, password: value});
    }

    const handleSignUp = useCallback(
        async () => {
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(loginData.email, loginData.password)
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
            <Button color={'#689FEF'} title={'Sign Up'} onPress={handleSignUp} />
            <Text 
                style={styles.textSignUp} 
                onPress={() => setIsSignInForm(true)}
            >
                I already have an account
            </Text>
        </View>
    )
}