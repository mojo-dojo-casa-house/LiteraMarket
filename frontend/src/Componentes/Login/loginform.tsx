import React, { useState, useEffect } from 'react';
import { View,Image, TextInput, StyleSheet } from 'react-native';
import {BolaAzul, BotãoLogin, BotãoTexto, BotãoVisitante, BotãoVisitanteTexto, Clicavel, ConecteBarra, ConecteCom, Conteiner,ConteinerConecteHorizontal,ConteinerHorizontal,ConteinerInput,Continuar,CrieConta,EsqueciaSenha,Icon,IconConteiner,Input, NãoPossuiConta, SocialIcon} from './style';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
 
const LoginForm = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const route = useRoute();
  const { Nome,Email, Senha } = route.params || {};

  
  const predefinedUsers = [
    { username: Nome , email: Email, password: Senha }, 
    { username: 'user1', email:'user1@gmail.com', password: 'password1' },
    { username: 'user2', email:'user2@gmail.com', password: 'password2' },
    
  ];
  const handleLogin = () => {
    const user = predefinedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setUsername(Nome)
      setPassword(Senha)
      setEmail(Email)
      navigation.navigate('Home', { value: 0 , Nome: username,Email: email, Senha: password});
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Conteiner>
      <ConteinerInput>
      <IconConteiner>
        <Icon source={require('../../../assets/Login/User.png')} />
      </IconConteiner>
      <Input placeholder="Usuário ou E-mail" onChangeText={text =>  setUsername(text)} />
      </ConteinerInput>

      <ConteinerInput>
      <IconConteiner>
        <Icon source={require('../../../assets/Login/Lock.png')} />
      </IconConteiner>
      <Input placeholder="Senha" onChangeText={text => setPassword(text)} />
      </ConteinerInput>
      <EsqueciaSenha>Esqueci a Senha</EsqueciaSenha>

      <BotãoLogin onPress={handleLogin}> <BotãoTexto>Entrar</BotãoTexto> </BotãoLogin>

      <BotãoVisitante onPress={() => navigation.navigate('Home', {value: 1})}> <BotãoVisitanteTexto>Entrar como visitante</BotãoVisitanteTexto> </BotãoVisitante>

      <ConteinerConecteHorizontal>
        <ConecteBarra></ConecteBarra>
        <ConecteCom>Ou Conecte com</ConecteCom>
        <ConecteBarra></ConecteBarra>
      </ConteinerConecteHorizontal>

      <ConteinerHorizontal>

      <BolaAzul>
        <SocialIcon source={require('../../../assets/Login/facebook.png')} />
      </BolaAzul>

      <BolaAzul>
        <SocialIcon source={require('../../../assets/Login/insta.png')} />
       </BolaAzul>

      </ConteinerHorizontal>

      <ConteinerHorizontal>
      <NãoPossuiConta>Não Possui uma Conta?</NãoPossuiConta>
      <Clicavel onPress={() => navigation.navigate('Cadastro' as never)}>  
      <CrieConta>Crie uma Conta</CrieConta>
      </Clicavel>
      </ConteinerHorizontal>

    </Conteiner>
  );
};



export default LoginForm;
