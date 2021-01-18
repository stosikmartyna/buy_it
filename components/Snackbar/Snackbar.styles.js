import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    snackbarContainer: {
        bottom: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        width: '100%',
    },

    snackbarBox: (type) => {
        return {
            alignItems: 'center',
            backgroundColor: type === 'Success' ? '#C4F6DB' : '#FFCFCB',
            borderRadius: 6,
            borderColor: type === 'Success' ? '#35BF75' : '#E95A4D',
            borderLeftWidth: 6,
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 20,
        }
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