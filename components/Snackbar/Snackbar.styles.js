import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    snackbarContainer: {
        display: 'flex',
        height: '100%',
        justifyContent: 'flex-end',
        position: 'absolute',
        width: '100%',
        zIndex: 1,
    },

    snackbarBox: {
        alignItems: 'center',
        backgroundColor: '#C4F6DB',
        borderRadius: 6,
        borderColor: '#35BF75',
        borderLeftWidth: 6,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },

    snackbarImage: {
        height: 30,
        marginRight: 15,
        width: 30,
    },

    snackbarTitle: {
        color: '#617068',
        fontWeight: 'bold'
    },

    snackbarText: {
        color: '#617068',
    }
})