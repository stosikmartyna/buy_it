import React, { useEffect, useState } from 'react';
import { View, Image, Text, Animated, TouchableHighlight, Easing } from 'react-native';
import { styles } from './Snackbar.styles';

export const Snackbar = () => {
    const [snackbarAnimation] = useState(new Animated.Value(200));

    const animateSnackbar = () => {
        Animated.sequence([
            Animated.timing(snackbarAnimation, {
                toValue: 0,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.delay(2000),
            Animated.timing(snackbarAnimation, {
                toValue: 200,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ]).start();        
    };

    const snackbarAnimationTransform = {
        transform: [
            {
                translateY: snackbarAnimation,
            }
        ]
    };

    useEffect(() => {
        animateSnackbar();
    })

    return (
        <View style={styles.snackbarContainer}>
            <TouchableHighlight>
                <Animated.View style={[styles.snackbarBox, snackbarAnimationTransform]}>
                    <Image style={styles.snackbarImage} source={require('../.././assets/success.png')} />
                    <View>
                        <Text style={styles.snackbarTitle}>Success</Text>
                        <Text style={styles.snackbarText}>Sent correctly!</Text>
                    </View>
                </Animated.View>
            </TouchableHighlight>
        </View>
    )
} 