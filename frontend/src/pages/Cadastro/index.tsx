import React from "react";
import CadastroForm from "../../Componentes/Cadastro/cadastroForm";
import { Clicavel, VoltarIMG, OndaFundo,Container,Logo, Titulo, Voltar  } from "./style";

export default function Cadastro() {

  return (
    <Container>
      <Clicavel  onPress={() => navigation.navigate('Login' as never)}>
        <Voltar>
      <VoltarIMG source={require('../../../assets/Login/VoltarSeta.png' )} />
      </Voltar>
      </Clicavel>
      <OndaFundo source={require('../../../assets/Login/Fundo.png' )} />
      <Logo source={require('../../../assets/Login/LogoG.png' )} />
     
      <Titulo>Cadastro</Titulo>
      <CadastroForm/>
    </Container>
    
  );
}