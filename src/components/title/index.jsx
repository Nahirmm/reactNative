import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

const Title = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{text}</Text>
        </View>
    )
};

export default Title;