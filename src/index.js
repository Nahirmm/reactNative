import { View } from 'react-native';
import { Title, Input, BooksList, BookModal } from './components/index';
import { useState } from 'react';
import { styles } from './style'

export default function App() {

  const [text, setText] = useState('');
  const [books, setBooks] = useState([]);
  const [visibilityModal, setvisibilityModal] = useState(false);
  const [bookSelected, setbookSelected] = useState('');

  const addBook = () => {
      if (text.length === 0) return;

      setBooks([
          ...books,
          {
              id: Math.random().toString(),
              value: text
          }
      ]);
      setText('');
  }

  const onHandlerBook = (id) => {
    setvisibilityModal(!visibilityModal);
    const selectedBook = books.find(book => book.id === id);
    setbookSelected(selectedBook);
  }

  const onHandlerCancelDeleteModal = () => {
    setvisibilityModal(!visibilityModal);
    setbookSelected(null);
  }

  const onHandlerDeleteBookModal = (id) => {
    setBooks(books.filter(book => book.id !== id))
    setvisibilityModal(!visibilityModal);
  }

  return (
    <View style={styles.container}>
      <Title text={'Agregue los libros de su colección:'}/>
      <Input 
        placeholder={'Ingrese el nombre del libro'}
        buttonInput={'+'}
        value={text}
        onChangeText={(text) => setText(text)}
        onPress={addBook}
      />
      <BooksList 
        books={books}
        itemSelected={onHandlerBook}
      />
      <BookModal 
        visibility={visibilityModal} 
        animationType='slide' 
        onCancel={onHandlerCancelDeleteModal} 
        onDelete={onHandlerDeleteBookModal} 
        bookSelected={bookSelected}  
      />
    </View>
  );
}


