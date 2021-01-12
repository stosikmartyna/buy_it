import { StyleSheet } from 'react-native';

const product = {
    alignItems: 'center',
    backgroundColor: '#d4e4fc',
    borderRadius: 4,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingHorizontal: 10,
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 60,
    },

    header: {
        color: '#689FEF',
        fontSize: 30,
        marginBottom: 10,
    },

    form: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%',
    },

    input: {
        borderColor: 'lightgrey', 
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,
        width: '70%',
    },

    button: {
        backgroundColor: '#689FEF',
        borderRadius: 4,        
        color: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        textTransform: 'uppercase',
    },

    instructionText: {
        color: '#969696',
        marginBottom: 10,
    },

    list: {
        width: '100%',
    },

    product: product,

    productName: {
        color: '#4f4f4f',
    },

    productInBasket: {
        ...product,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e2e2e2',
    },

    shoppingListImage: {
        height: 26,
        marginRight: 10,
        width: 26
    },

    signOutButton: {
        marginBottom: 30,
    },

    hiddenItem: {
        backgroundColor: '#f77979',
        borderRadius: 4,
        height: 50,
        marginBottom: 5,
        paddingHorizontal: 10,
        width: '100%',
    },

    hiddenItemImage: {
        height: 26,
        marginTop: 11,
        width: 26,
    }
})