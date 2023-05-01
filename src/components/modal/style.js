import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerModal: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 500,
        width: 350,
        backgroundColor: '#565676',
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 50
    },
    titleModal: {
        fontSize: 20,
        color: 'white'
    },
    detailContainerModal: {

    },
    detailMessage: {
        fontSize: 18,
        color: 'white'    
    },
    textBook: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 80,
    },
    buttonContainerModal: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "80%",
    }
});