import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './UserAuth.styles';
import { useAuth } from '../../hooks/useAuth';

export const UserAuthSignUp = ({ setIsSignInForm }) => {
    const {loginData, handleEmail, handlePassword, handleSignUp} = useAuth();

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