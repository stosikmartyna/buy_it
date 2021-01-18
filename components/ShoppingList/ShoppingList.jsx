import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, TouchableOpacity, Image, Keyboard } from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { useAuth } from '../../hooks/useAuth';
import { useProducts } from '../../hooks/useProducts';
import { Snackbar } from '../Snackbar/Snackbar';
import { styles } from './ShoppingList.styles';

export const ShoppingList = () => {
    const [product, setProduct] = useState('');
    const {getUserProducts, postProduct, removeUserProduct, listOfProducts, addToBasket, snackbar} = useProducts();
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
        Keyboard.dismiss();
    }

    const basketIconPath = (isInBasket) => isInBasket ? require('../.././assets/inBasket.png') : require('../.././assets/basket.png');

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
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
            </View>


            <Text style={styles.instructionText}>Swipe out to remove product from the list</Text>

            <SwipeListView 
                useFlatList={true}
                style={styles.list}
                data={listOfProducts}
                keyExtractor={(item => item.itemKey)}
                renderItem={({item}) => (
                    <SwipeRow 
                        leftOpenValue={50} 
                        disableLeftSwipe 
                        disableRightSwipe={item.isInBasket}
                    >
                        <View>
                            {!item.isInBasket && (
                                <TouchableOpacity style={styles.hiddenItem} onPress={() => removeUserProduct(item.itemKey)}>
                                    <Image style={styles.hiddenItemImage} source={require('../.././assets/bin.png')} />
                                </TouchableOpacity>
                            )}                       
                        </View> 
                        <TouchableHighlight  
                            style={item.isInBasket ? styles.productInBasket : styles.product}
                            underlayColor={item.isInBasket ? '#f9f9f9' :'#bfd3f2'}
                            id={item.itemKey} 
                            onPress={() => addToBasket(item.itemKey)}
                        >    
                            <>
                                <Text style={styles.productName}>{item.itemValue}</Text>
                                <Image style={styles.shoppingListImage} source={basketIconPath(item.isInBasket)} />
                            </>
                        </TouchableHighlight>
                    </SwipeRow>
                )}
            />
            <TouchableHighlight style={styles.signOutButton}>
                <Button color={'#689FEF'} title={'Sign out'} onPress={signOut} style={styles.button} />
            </TouchableHighlight>
            {snackbar.isVisible && <Snackbar state={snackbar} />}
        </View>
    )
}    