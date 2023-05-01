import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containterInput: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 17,
        borderBottomColor: '#5A5A5A',
        borderBottomWidth: 1,
    },
    touchableInput: {
        marginLeft: 15,
        width: 20,

    },
    textTouchableInput: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#565676',
    }
});