import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './Snackbar.styles';

export const Snackbar = () => {
    return (
        <View style={styles.snackbarContainer}>
            <View style={styles.snackbarBox}>
                <Image style={styles.snackbarImage} source={require('../.././assets/success.png')} />
                <View>
                    <Text style={styles.snackbarTitle}>Success</Text>
                    <Text style={styles.snackbarText}>Sent correctly!</Text>
                </View>
            </View>
        </View>
    )
} 