import React, { useState } from "react";
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import { styles } from './style'

const Input = ({placeholder, value, onChangeText, buttonInput, onPress}) => {
    return (
        <View style={styles.containterInput}>
            <TextInput 
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity style={styles.touchableInput} onPress={onPress}>
                <Text style={styles.textTouchableInput}>{buttonInput}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Input;