import React, { useCallback, useContext, useEffect, useState } from 'react';
import firebase from 'firebase';
import { View, Text, TextInput, Button, FlatList, TouchableHighlight } from 'react-native';
import { styles } from './ShoppingList.styles';
import { AuthContext } from '../../context/AuthProvider';

export const ShoppingList = () => {
    const [product, setProduct] = useState('');
    const [listOfProducts, setListOfProducts] = useState([]);

    const {user} = useContext(AuthContext);

    const postProduct = async (productName) => {
        const postUrl = `user/${user.uid}/products`
        try {
            await firebase.database().ref(postUrl).push(productName);
            alert('Sent correctly');
            return true;
        } catch (err) {
            alert(err);
        }
    };

    const getUserProducts = useCallback(async () => {
        const getUrl = `user/${user.uid}/products`
        try {
            const response = await firebase.database().ref(getUrl).once('value')
            const data = [];
            // map object entries to get array instead of nested objects from firebase
            response.forEach((element => {
                data.push({
                    itemValue: element.val(),
                    itemKey: element.key,
                })
            }));

            setListOfProducts(...listOfProducts, data);
        } catch (err) {
            alert(err);
        }
    });

    useEffect(() => {
        getUserProducts();
    }, []);
    
    const handleInputChange = (value) => {
        setProduct(value)
    }

    const handleSubmit = () => {
        const isValid = product.trim() !== '';
        // const isoDateNow = new Date().toISOString();
        // const newProduct = { id: isoDateNow, value: product };

        const addProduct = () => {
            setListOfProducts(state => [...state, product]);
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
                data={listOfProducts}
                keyExtractor={(item => item.itemKey)}
                renderItem={({item}) => (
                    <View style={styles.product} id={item.itemKey}>
                        <Text>{item.itemValue}</Text>
                        <TouchableHighlight style={styles.removeButton}>
                            <Button color={'#689FEF'} title={'X'} onPress={removeProduct.bind(this, item.itemKey)}/>
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