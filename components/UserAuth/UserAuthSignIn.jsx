import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './UserAuth.styles';
import { useAuth } from '../../hooks/useAuth';

export const UserAuthSignIn = ({ setIsSignInForm }) => {
    const {loginData, handleEmail, handlePassword, handleSignIn} = useAuth();

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