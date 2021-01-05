import { useState, useContext, useCallback } from "react";
import { AuthContext } from '../context/AuthProvider';
import firebase from 'firebase';

export const useProducts = () => {
    const [listOfProducts, setListOfProducts] = useState([]);

    const {user} = useContext(AuthContext);

    const postProduct = async (productName) => {
        const postUrl = `user/${user.uid}/products`
        try {
            await firebase.database().ref(postUrl).push(productName);
            getUserProducts();
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
            setListOfProducts(data);
        } catch (err) {
            alert(err);
        }
    });

    const removeUserProduct = async (productToRemove) => {
        const postUrl = `user/${user.uid}/products`
        try {
            await firebase.database().ref(postUrl).child(productToRemove).remove();
            getUserProducts();
            alert('Removed correctly');
        } catch (err) {
            alert(err);
        }
    };

    const signOut = () => {
        firebase.auth().signOut();
    }

    return {
        postProduct,
        getUserProducts,
        removeUserProduct,
        signOut,
        listOfProducts
    }
}