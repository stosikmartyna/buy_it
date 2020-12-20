import React, { useContext, useState } from 'react';
import firebase from 'firebase';
import { View, Text, TextInput, Button, FlatList, TouchableHighlight } from 'react-native';
import { styles } from './ShoppingList.styles';
import { AuthContext } from '../../context/AuthProvider';

export const ShoppingList = () => {
    const [product, setProduct] = useState('');
    const [listOfProducts, setListOfProducts] = useState([]);

    const {user} = useContext(AuthContext);

    const postProduct = async (productName) => {
        try {
            await firebase.database().ref('products').push(productName);
            alert('Sent correctly');
            return true;
        } catch (err) {
            alert(err);
        }
    };
    
    const handleInputChange = (value) => {
        setProduct(value)
    }

    const handleSubmit = () => {
        const isValid = product.trim() !== '';
        const isoDateNow = new Date().toISOString();
        const newProduct = { id: isoDateNow, value: product };

        const addProduct = () => {
            setListOfProducts(state => [...state, newProduct]);
            setProduct('');
        };       

        isValid && postProduct(product) && addProduct(); 
    }

    const removeProduct = (productToRemove) => {
        setListOfProducts(state => {
          return state.filter(product => product.id !== productToRemove)
        });
    }

    const signOut = () => {
        firebase.auth().signOut();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Shopping List</Text>
            <View style={styles.form}>
                <TextInput 
                    placeholder={'ex. Milk'}
                    style={styles.input}
                    onChangeText={handleInputChange}
                    value={product}
                />
                <TouchableHighlight>
                    <Text style={styles.button} onPress={handleSubmit}>Add</Text>
                </TouchableHighlight>
            </View>
            
            <FlatList 
                style={styles.list}
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
            <TouchableHighlight style={styles.signOutButton}>
                <Button color={'#689FEF'} title={'Sign out'} onPress={signOut} style={styles.button} />
            </TouchableHighlight>
        </View>
    )
}    