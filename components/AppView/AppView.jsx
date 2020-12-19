import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { ShoppingList } from '../ShoppingList/ShoppingList';
import { WelcomePage } from '../WelcomePage/WelcomePage';

export const AppView = () => {
    const {user} = useContext(AuthContext);
    return user ? <ShoppingList /> : <WelcomePage />
}