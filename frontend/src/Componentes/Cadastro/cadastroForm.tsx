import React, { useState } from 'react';
import {BolaAzul, BotãoLogin, BotãoTexto, ConecteBarra, ConecteCom, Conteiner,ConteinerConecteHorizontal,ConteinerHorizontal,ConteinerInput,Icon,IconConteiner,Input, SocialIcon} from './style';
import { useNavigation } from '@react-navigation/native';

 
const CadastroForm = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const handleFormSubmit = () => {

    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);

    navigation.navigate('Login', { Nome: nome,Email: email, Senha: senha });
  };

  return (
    <Conteiner>
      <ConteinerInput>
      <IconConteiner>
        <Icon source={require('../../../assets/Login/User.png')} />
      </IconConteiner>
      <Input placeholder="Nome" onChangeText={text => setNome(text)} value={nome} />
      </ConteinerInput>

      <ConteinerInput>
      <IconConteiner>
        <Icon source={require('../../../assets/Login/email.png')} />
      </IconConteiner>
      <Input placeholder="E-mail" onChangeText={text => setEmail(text)} value={email} />
      </ConteinerInput>

      <ConteinerInput>
      <IconConteiner>
        <Icon source={require('../../../assets/Login/Lock.png')} />
      </IconConteiner>
      <Input placeholder="Senha" onChangeText={text => setSenha(text)} value={senha} />
      </ConteinerInput>
     

      <BotãoLogin onPress={handleFormSubmit}> <BotãoTexto>Entrar</BotãoTexto> </BotãoLogin>

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
