// RetiradaDeLivro.js
import React, { useContext, useState } from 'react';
import {  View, TextInput, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { BookContext } from './BookContext';

const RetiradaDeLivros = () => {
  const [livro, setLivro] = useState('');
  const { books, removeBook } = useContext(BookContext);

  const retirarLivro = () => {
    if (livro.trim() !== '' && books.includes(livro)) {
      removeBook(livro);
      setLivro(''); // Limpa o campo após a remoção
    } else {
      alert("Livro não encontrado na lista.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Retirada de Livro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do livro"
        value={livro}
        onChangeText={setLivro}
      />
        <TouchableOpacity style={styles.button} onPress={retirarLivro}>
        <Text style={styles.buttonText}>Retirar</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.list}
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7e7ce'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold', 
    marginBottom: 20,
    color: '#59372b',
  },
  input: {
    height: 50,           // Ajusta a altura do campo de entrada
    width: '37%',         // Ajusta a largura do campo de entrada
    borderColor: '#59372b',
    borderWidth: 1,
    marginBottom: 7,
    paddingHorizontal: 10, // Adiciona padding horizontal interno
    borderRadius: 5,   
  },
  button: {
    backgroundColor: '#59372b', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    height: 40,
    width: '37%',
    marginTop: 15, // Espaço acima do botão
  },
  buttonText: {
    color: '#f7e7ce', 
    fontSize: 17,
  },
  list: {
    marginTop: 20, // Adiciona espaço acima da lista
    width: '37%',
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#59372b',
    color: '#59372b',
    textAlign: 'center',
  },
});

export default RetiradaDeLivros;
