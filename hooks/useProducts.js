import { useState, useContext, useCallback } from "react";
import { AuthContext } from '../context/AuthProvider';
import firebase from 'firebase';

export const useProducts = () => {
    const [listOfProducts, setListOfProducts] = useState([]);
    const [snackbar, setSnackbar] = useState({
        isVisible: false,
        type: undefined,
        message: '',
    });

    const {user} = useContext(AuthContext);

    const closeSnackbar = () => {
        setTimeout(() => setSnackbar({
            isVisible: false,
            type: undefined
        }), 3000)
    }

    const postProduct = async (productName) => {
        const postUrl = `user/${user.uid}/products`
        try {
            await firebase.database().ref(postUrl).push(productName);
            getUserProducts();
            setSnackbar({isVisible: true, type: 'Success', message: 'Sent correctly!'});
            return true;
        } catch {
            setSnackbar({isVisible: true, type: 'Error', message: 'Cannot add new product. Please try again.'});
        } finally {
            closeSnackbar();
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
                    isInBasket: false,
                })
            }));
            setListOfProducts(data);
        } catch {
            setSnackbar({isVisible: true, type: 'Error', message: 'Cannot load list of products.'});
        } finally {
            closeSnackbar();
        }
    });

    const removeUserProduct = async (productToRemove) => {
        const postUrl = `user/${user.uid}/products`
        try {
            await firebase.database().ref(postUrl).child(productToRemove).remove();            
            getUserProducts();
            setSnackbar({isVisible: true, type: 'Success', message: 'Removed correctly!'});
        } catch (err) {
            setSnackbar({isVisible: true, type: 'Error', message: 'Cannot remove product. Please try again.'});
        } finally {
            closeSnackbar();
        }
    };

    const addToBasket = (key) => {
        const productToBasket = listOfProducts.find(product => product.itemKey === key);
        const filteredList = listOfProducts.filter(product => product !== productToBasket);

        const updatedProduct = {...productToBasket, isInBasket: !productToBasket.isInBasket};
        const updatedList = [...filteredList, updatedProduct];

        setListOfProducts(updatedList)
    }

    return {
        postProduct,
        getUserProducts,
        removeUserProduct,
        addToBasket,
        listOfProducts,
        snackbar,
    }
}