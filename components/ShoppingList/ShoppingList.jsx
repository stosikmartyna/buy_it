import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ShoppingList = () => {
    return (
        <View style={styles.container}>
            <Text>ShoppingList</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }
})
    