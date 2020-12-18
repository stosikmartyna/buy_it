import React from 'react';
import { Image, Text, View, Button } from 'react-native';
import { styles } from './WelcomePage.styles';

export const WelcomePage = ({ isAppStarted }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../.././assets/shopping.jpg')}/>
            <Text style={styles.logoFirstWord}>
                Buy
                <Text style={styles.logoSecondWord}>
                    It!
                </Text>
            </Text>
            <Text style={styles.subtitle}>Shopping List App</Text>
            <Button color={'#689FEF'} title={'Start'} onPress={isAppStarted}/>
        </View>
    )
}