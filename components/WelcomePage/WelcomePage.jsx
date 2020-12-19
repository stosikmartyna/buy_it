import React, { useCallback, useState } from 'react';
import firebase from 'firebase';
import { Image, Text, View, TextInput, Button } from 'react-native';
import { styles } from './WelcomePage.styles';

export const WelcomePage = () => {
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
        <View style={styles.container}>
            <Image style={styles.image} source={require('../.././assets/shopping.jpg')} />
            <Text style={styles.logoFirstWord}>
                Buy
                <Text style={styles.logoSecondWord}>
                    It!
                </Text>
            </Text>
            <Text style={styles.subtitle}>Shopping List App</Text>

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
            </View>
        </View>
    )
}