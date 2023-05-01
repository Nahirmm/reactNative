import React from "react";
import { View, FlatList } from "react-native";
import BookItem from './itemBook/index';
import { styles } from "./style";

const BooksList = ({ books, itemSelected }) => {

    const renderItem = ({item}) => (
        <BookItem item={item} itemSelected={itemSelected} />
    );

    const keyExtractor = (item) => item.id;

    return (
        <View style={styles.containerListBooks}>
            <FlatList 
              renderItem={renderItem}
              data={books}
              keyExtractor={keyExtractor}
              alwaysBounceVertical={false}
            />
        </View>
    )
};

export default BooksList;