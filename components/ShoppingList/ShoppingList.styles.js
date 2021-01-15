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
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        marginTop: 50,
    },

    formContainer: {
        marginHorizontal: 40,
    },

    header: {
        color: '#689FEF',
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
    },

    form: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%',
    },

    input: {
        borderColor: 'lightgrey', 
        borderRadius: 4,
        borderWidth: 1,
        marginLeft: 8,
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
        marginBottom: 15,
        width: '80%',
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
        marginBottom: 15,
    },

    hiddenItem: {
        backgroundColor: '#f77979',
        borderRadius: 4,
        height: 50,
        marginBottom: 5,
        paddingHorizontal: 10,
    },

    hiddenItemImage: {
        height: 26,
        marginTop: 11,
        width: 26,
    }
})