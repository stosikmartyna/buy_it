import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './WelcomePage.styles';
import { UserAuth } from '../UserAuth/UserAuth';

export const WelcomePage = () => {
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
            <UserAuth />            
        </View>
    )
}