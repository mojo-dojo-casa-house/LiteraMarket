import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../pages/home';
import Produto from '../pages/Produto/produto';
import Favoritos from '../pages/Favoritos/favoritos';
import Bolsa from '../pages/Bolsa/bolsa';
import Perfil from '../pages/Perfil/perfil';
import Categorias from '../pages/Categorias/categorias';
import Tipo from '../pages/Categorias/TipoCategoria';

const Stack = createStackNavigator();

const Navigation = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Categorias' screenOptions={{ headerShown: false,}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Produto' component={Produto} />
        <Stack.Screen name='Favoritos' component={Favoritos} />
        <Stack.Screen name='Categorias' component={Categorias} />
          <Stack.Screen name='Tipo' component={Tipo} />
        <Stack.Screen name='Bolsa' component={Bolsa} />
        <Stack.Screen name='Perfil' component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
