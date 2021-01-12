import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
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

            <Text style={styles.instructionText}>Swipe out to remove product from the list</Text>

            <SwipeListView 
                useFlatList={true}
                style={styles.list}
                data={listOfProducts}
                keyExtractor={(item => item.itemKey)}
                renderItem={({item}) => (
                    <TouchableHighlight  
                        style={item.isInBasket ? styles.productInBasket : styles.product}
                        underlayColor={'#bfd3f2'}
                        id={item.itemKey} 
                        onPress={() => addToBasket(item.itemKey)}
                    >    
                        <>
                            <Text style={styles.productName}>{item.itemValue}</Text>
                            {!item.isInBasket && <Image style={styles.shoppingListImage} source={require('../.././assets/basket.png')} />}
                            {item.isInBasket && <Image style={styles.shoppingListImage} source={require('../.././assets/inBasket.png')} />}
                        </>
                    </TouchableHighlight >
                )}
                renderHiddenItem={({item}) => (
                    <View>
                        {!item.isInBasket && (
                            <TouchableOpacity style={styles.hiddenItem} onPress={() => removeUserProduct(item.itemKey)}>
                                <Image style={styles.hiddenItemImage} source={require('../.././assets/bin.png')} />
                            </TouchableOpacity>
                        )}                       
                    </View>    
                )}
                leftOpenValue={50}
                disableLeftSwipe
            />
            <TouchableHighlight style={styles.signOutButton}>
                <Button color={'#689FEF'} title={'Sign out'} onPress={signOut} style={styles.button} />
            </TouchableHighlight>
        </View>
    )
}    