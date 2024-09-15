// Login.js
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

 const Login = ({ navigation }) => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'Liane', 'Jonas', 'Lucas' && password === '1234') {
      navigation.navigate('Home');
    } else {
      alert("Usuário ou Senha inválidos.");
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>

            <Image
                source={require('./assets/logo1.png')}
                style={styles.image}
           />
           <Text style={styles.title}>Refúgio das Letras</Text>
       </View>
      <Text style={styles.title1}>Seja Bem Vindo</Text>
      <Text style={styles.title2}>Insira seus dados a baixo</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor = "#59372b"
        placeholder="Nome do usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha do usuário"
        placeholderTextColor = "#59372b"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      /> 
      <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7e7ce',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10 
  },
  image: { // Estilo para a imagem
      width: 150, // Ajuste conforme necessário
      height: 150, // Ajuste conforme necessário
      marginRight: 10,
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#59372b',
      marginRight: 100
    },    
  title1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#59372b',
  },
  title2: {
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 12,
    color: '#59372b',
  },
  input: {
    height: 50,           // Ajusta a altura do campo de entrada
    width: '20%',         // Ajusta a largura do campo de entrada
    borderColor: '#59372b',
    borderWidth: 1,
    marginBottom: 7,
    paddingHorizontal: 10, // Adiciona padding horizontal interno
    borderRadius: 5,       // Adiciona bordas arredondadas
  },
  forgotPassword: {
    fontSize: 12,
    color: '#59372b',
    marginTop: 5, // Espaço acima do texto
    marginRight: 180,
    alignSelf: 'center', // Alinha o texto à esquerda
  },
  button: {
    backgroundColor: '#59372b', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    height: 40,
    width: '20%',
    marginTop: 15, // Espaço acima do botão
  },
  buttonText: {
    color: '#f7e7ce', 
    fontSize: 17,

  },
});

export default Login;
