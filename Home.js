// Home.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma Opção</Text>
      
      <TouchableOpacity 
      style={styles.button} 
      onPress={() => navigation.navigate('AdicionarLivros')}>
      <Text style={styles.buttonText}>Adicionar Livros</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
      style={styles.button} 
      onPress={() => navigation.navigate('ListaDeLivros')}>
          <Text style={styles.buttonText}>Lista De Livros</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.button} 
      onPress={() => navigation.navigate('RetiradaDeLivros')}>
        <Text style={styles.buttonText}>Retirada dos Livros</Text>
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
    backgroundColor: '#f7e7ce',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#59372b'
  },
  button: {
    backgroundColor: '#59372b', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#f7e7ce', 
    fontSize: 18,
  },
});

export default Home;
