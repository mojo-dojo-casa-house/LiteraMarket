import { Pressable, TextInput, View, Text, Image } from "react-native";
import React from "react";
import  { OndaFundo,Container,Logo, Titulo } from "../Login/styles";
import LoginForm from "../../Componentes/Login/loginform";
import CadastroForm from "../../Componentes/Cadastro/cadastroForm";

export default function Cadastro() {

  return (
    <Container>
      <OndaFundo source={require('../../../assets/Login/Fundo.png' )} />
      <Logo source={require('../../../assets/Login/LogoG.png' )} />
     
      <Titulo>Cadastro</Titulo>
      <CadastroForm/>
    </Container>
    
  );
}