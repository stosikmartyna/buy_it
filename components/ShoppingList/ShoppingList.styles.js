import { StyleSheet } from 'react-native';

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

    list: {
        width: '100%',
    },

    product: {
        alignItems: 'center',
        backgroundColor: '#d4e4fc',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    removeButton: {
        width: 40
    }
})