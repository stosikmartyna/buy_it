import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, Button, StyleSheet } from 'react-native';

export const ShoppingList = () => {
    const [product, setProduct] = useState('');
    const [listOfProducts, setListOfProducts] = useState([]);

    const handleInputChange = (value) => {
        setProduct(value)
    }

    const handleProductSubmit = () => {
        setListOfProducts([...listOfProducts, product]);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Shopping List</Text>
            <TextInput 
                placeholder="ex. Milk" 
                style={styles.input}
                onChangeText={handleInputChange}
            />
            <TouchableHighlight style={styles.button}>
                <Button color='#689FEF' title={'Add'} onPress={handleProductSubmit} />
            </TouchableHighlight>
            {listOfProducts.map((product, index) => {
                return (
                    <View style={styles.product} key={index}>
                        <Text>{product}</Text>
                    </View>
                )
            })}
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },

      header: {
        color: '#689FEF',
        fontSize: 30,
        marginBottom: 10,
      },

      input: {
        borderColor: '#474948', 
        borderRadius: 4,
        borderWidth: 1, 
        marginBottom: 10,
        padding: 10,
        width: 260, 
      },

      button: {
          marginBottom: 20
      },

      product: {
        backgroundColor: '#d4e4fc',
        borderColor: '#689FEF',
        borderRadius: 4,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: 260,
      }
})
    