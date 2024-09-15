import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BookContext } from './BookContext';

const AdicionarLivros = () => {
  const [livro, setLivro] = useState('');
  const { addBook } = useContext(BookContext);

  const adicionarLivro = () => {
    if (livro.trim() !== '') {
      addBook(livro);
      setLivro(''); // Limpa o campo após adicionar
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicione aqui os Livros</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do livro"
        value={livro}
        onChangeText={setLivro}
      />
      <TouchableOpacity style={styles.button} onPress={adicionarLivro}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
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
      marginBottom: 12,
      color: '#59372b',
  },
  input: {
    height: 50,           // Ajusta a altura do campo de entrada
    width: '37%',         // Ajusta a largura do campo de entrada
    borderColor: '#59372b',
    borderWidth: 1,
    marginBottom: 7,
    paddingHorizontal: 10, // Adiciona padding horizontal interno
    borderRadius: 5,       // Adiciona bordas arredondadas
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
});

export default AdicionarLivros;
