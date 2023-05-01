import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./style";

const BookModal = ({ visibility, animationType, onCancel, onDelete, bookSelected }) => {
    return (
        <Modal visible={visibility} animationType={animationType} transparent={true}>
            <View style={styles.containerModal}>
                <Text style={styles.titleModal}>Detalle del libro:</Text>
                <View style={styles.detailContainerModal}>
                    <Text style={styles.textBook}>{bookSelected?.value}</Text>
                    <Text style={styles.detailMessage}>Está segurx de eliminar éste libro?</Text>
                </View>
                <View style={styles.buttonContainerModal}>
                    <Button 
                    title='Cancelar'
                    color='#2B2D42'
                    onPress={onCancel}
                    />
                    <Button 
                    title='Eliminar'
                    color='#2B2D42'
                    onPress={() => onDelete(bookSelected.id)}
                    />
                </View>
            </View>
        </Modal>
    )
};

export default BookModal;