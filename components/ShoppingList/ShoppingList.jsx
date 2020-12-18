import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableHighlight } from 'react-native';

export const ShoppingList = () => {
    const [product, setProduct] = useState('');
    const [listOfProducts, setListOfProducts] = useState([]);

    const handleInputChange = (value) => {
        setProduct(value)
    }

    const handleSubmit = () => {
        const isValid = product.trim() !== '';
        const newProduct = { id: new Date().toISOString(), value: product }

        const addProduct = () => {
            setListOfProducts(state => [...state, newProduct])
        };

        isValid && addProduct();
    }

    const removeProduct = (productToRemove) => {
        setListOfProducts(state => {
          return state.filter(product => product.id !== productToRemove)
        });
      }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Shopping List</Text>
            <TextInput 
                placeholder={'ex. Milk'}
                style={styles.input}
                onChangeText={handleInputChange}
                value={product}
            />
            <TouchableHighlight style={styles.button}>
                <Button color={'#689FEF'} title={'Add'} onPress={handleSubmit} />
            </TouchableHighlight>
            <FlatList 
                keyExtractor={item => item.id}
                data={listOfProducts}
                renderItem={itemData => (
                    <View style={styles.product} id={itemData.item.id}>
                        <Text>{itemData.item.value}</Text>
                        <TouchableHighlight style={styles.removeButton}>
                            <Button color={'#689FEF'} title={'X'} onPress={removeProduct.bind(this, itemData.item.id)}/>
                        </TouchableHighlight>
                    </View>
                )}
            />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 50
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
        alignItems: 'center',
        backgroundColor: '#d4e4fc',
        borderColor: '#689FEF',
        borderRadius: 4,
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10,
        width: 260,
      },

      removeButton: {
        width: 40
      }
})
    