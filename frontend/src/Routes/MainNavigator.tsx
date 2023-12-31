import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../pages/home';
import Produto from '../pages/Produto/produto';
import Favoritos from '../pages/Favoritos/favoritos';
import Bolsa from '../pages/Bolsa/bolsa';
import Perfil from '../pages/Perfil/perfil';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Categorias from '../pages/Categorias/categorias';
import Tipo from '../pages/Categorias/TipoCategoria';
import Splash from '../pages/Splash';
import Historico from '../pages/Historico/historico';
import Compra from '../pages/CompraFinalizada';

const Stack = createStackNavigator();

const Navigation = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false,}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Produto' component={Produto} />
        <Stack.Screen name='Favoritos' component={Favoritos} />
        <Stack.Screen name='Compra' component={Compra} />
        <Stack.Screen name='Categorias' component={Categorias} />
          <Stack.Screen name='Tipo' component={Tipo} />
        <Stack.Screen name='Bolsa' component={Bolsa} />
         <Stack.Screen name='Historico' component={Historico} />
        <Stack.Screen name='Perfil' component={Perfil} />
        <Stack.Screen name='Splash' component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
