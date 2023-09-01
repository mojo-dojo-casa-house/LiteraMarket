import React from 'react';
import { View,Image, TextInput, StyleSheet } from 'react-native';
import {BolaAzul, BotãoLogin, BotãoTexto, Clicavel, ConecteBarra, ConecteCom, Conteiner,ConteinerConecteHorizontal,ConteinerHorizontal,ConteinerInput,CrieConta,EsqueciaSenha,Icon,IconConteiner,Input, NãoPossuiConta, SocialIcon} from './style';
import { useNavigation } from '@react-navigation/native';

 
const CadastroForm = () => {
  const navigation = useNavigation();
  return (
    <Conteiner>
      <ConteinerInput>
      <IconConteiner>
        <Icon source={require('../../../assets/Login/User.png')} />
      </IconConteiner>
      <Input placeholder="Nome" onChangeText={text => console.log(text)} />
      </ConteinerInput>

      <ConteinerInput>
      <IconConteiner>
        <Icon source={require('../../../assets/Login/email.png')} />
      </IconConteiner>
      <Input placeholder="E-mail" onChangeText={text => console.log(text)} />
      </ConteinerInput>

      <ConteinerInput>
      <IconConteiner>
        <Icon source={require('../../../assets/Login/Lock.png')} />
      </IconConteiner>
      <Input placeholder="Senha" onChangeText={text => console.log(text)} />
      </ConteinerInput>
     

      <BotãoLogin onPress={() => navigation.navigate('Home' as never)}> <BotãoTexto>Entrar</BotãoTexto> </BotãoLogin>

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

     
      
    </Conteiner>
  );
};



export default CadastroForm;