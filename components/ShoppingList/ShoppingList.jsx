import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { useProducts } from '../../hooks/useProducts';
import { styles } from './ShoppingList.styles';

export const ShoppingList = () => {
    const [product, setProduct] = useState('');
    const {getUserProducts, postProduct, removeUserProduct, listOfProducts, addToBasket} = useProducts();
    const {signOut} = useAuth();
  
    useEffect(() => {
        getUserProducts();
    }, []);
    
    const handleInputChange = (value) => {
        setProduct(value)
    }

    const handleSubmit = () => {
        const isValid = product.trim() !== '';
        isValid && postProduct(product) && setProduct(''); 
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
                    <TouchableOpacity 
                        style={item.isInBasket ? styles.productInBasket : styles.product} 
                        id={item.itemKey} 
                        onPress={() => addToBasket(item.itemKey)}
                    >
                        <Text>{item.itemValue}</Text>
                        <View style={styles.basketAndButton}>
                            {item.isInBasket && <Image style={styles.shoppingListImage} source={require('../.././assets/basket.png')} />}
                            <TouchableHighlight style={styles.removeButton}>
                                <Button 
                                    color={'#689FEF'} 
                                    title={'X'} 
                                    onPress={() => removeUserProduct(item.itemKey)} 
                                    disabled={item.isInBasket} 
                                />
                            </TouchableHighlight>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <TouchableHighlight style={styles.signOutButton}>
                <Button color={'#689FEF'} title={'Sign out'} onPress={signOut} style={styles.button} />
            </TouchableHighlight>
        </View>
    )
}    