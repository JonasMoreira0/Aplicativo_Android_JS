// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BookProvider } from './BookContext';
import Login from './Login';
import Home from './Home';
import AdicionarLivros from './AdicionarLivros';
import ListaDeLivros from './ListaDeLivros';
import RetiradaDeLivros from './RetiradaDeLivros';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BookProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Sistema de Organização de Livros para a Livraria Refúgio das Letras' }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Sistema de Organização de Livros para a Livraria Refúgio das Letras' }}
          />
          <Stack.Screen
            name="AdicionarLivros"
            component={AdicionarLivros}
            options={{ title: 'Sistema de Organização de Livros para a Livraria Refúgio das Letras' }}
          />
          <Stack.Screen
            name="ListaDeLivros"
            component={ListaDeLivros}
            options={{ title: 'Sistema de Organização de Livros para a Livraria Refúgio das Letras' }}
          />
          <Stack.Screen
            name="RetiradaDeLivros"
            component={RetiradaDeLivros}
            options={{ title: 'Sistema de Organização de Livros para a Livraria Refúgio das Letras' }}
          />
        </Stack.Navigator>
      </BookProvider>
    </NavigationContainer>
  );
};

export default App;
