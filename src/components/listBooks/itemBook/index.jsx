import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

const BookItem = ({ item, itemSelected }) => {
    return (
        <TouchableOpacity style={styles.containerItem} onPress={() => itemSelected(item.id)}>
            <Text style={styles.textItem}>{item.value}</Text>
        </TouchableOpacity>
    )
};

export default BookItem;