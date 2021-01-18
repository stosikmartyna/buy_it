import React, { useEffect, useState } from 'react';
import { View, Image, Text, Animated, TouchableHighlight, Easing } from 'react-native';
import { styles } from './Snackbar.styles';

export const Snackbar = ({ state }) => {
    const [snackbarAnimation] = useState(new Animated.Value(200));

    const {type, message} = state;

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
    }, []);

    const snackbarIconPath = type === 'Success' ? require('../.././assets/success.png') : require('../.././assets/error.png');

    return (
        <View style={styles.snackbarContainer}>
            <TouchableHighlight>
                <Animated.View style={[styles.snackbarBox(type), snackbarAnimationTransform]}>
                    <Image style={styles.snackbarImage} source={snackbarIconPath} />
                    <View>
                        <Text style={styles.snackbarTitle}>{type}</Text>
                        <Text style={styles.snackbarText}>{message}</Text>
                    </View>
                </Animated.View>
            </TouchableHighlight>
        </View>
    )
} 